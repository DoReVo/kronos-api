import Ajv from "ajv";
import got from "got";
import { isEmpty } from "lodash-es";
import { DateTime } from "luxon";
import { server } from "../../../server.js";
import { BASE_QS } from "./constant.js";
import JakimResponseSchema from "./JakimResponseSchema.js";

const ajv = new Ajv();
const jakimResponseValidator = ajv.compile(JakimResponseSchema);

const BASE_API_URL = "https://www.e-solat.gov.my/index.php";

const BASE_REDIS_KEY = "kronos:zone";

export const getTime = async (date, zone) => {
  const { redis, log } = server;

  let data = await redis.hget(`${BASE_REDIS_KEY}:${zone}`, date);

  // If we found the field in the hash
  if (!isEmpty(data)) {
    log.info({ date, zone }, "Found data for zone and date");
    return JSON.parse(data);
  }

  // Data not yet exist, retrieve all
  // data for this zone
  log.info({ zone }, "Data for zone not found,trying to fetch from remote");
  await fetchAndSaveYearlyData(zone);
  log.info({ zone }, "Data for zone fetched successfully");

  data = await redis.hget(`${BASE_REDIS_KEY}:${zone}`, date);

  return JSON.parse(data);
};

const fetchAndSaveYearlyData = async (zone) => {
  const { redis, log } = server;

  const url = new URL(BASE_API_URL);

  url.search = new URLSearchParams({
    ...BASE_QS,
    period: "year",
    zone,
  });

  const res = await got(url.toString(), {
    https: {
      rejectUnauthorized: false,
    },
  }).json();

  const isValid = jakimResponseValidator(res);

  if (!isValid) throw jakimResponseValidator.errors;

  const formattedData = res.prayerTime.map((day) => ({
    date: DateTime.fromFormat(day.date, "dd-MMM-yyyy").toISODate(),
    imsak: DateTime.fromFormat(day.imsak, "TT").toFormat("t"),
    fajr: DateTime.fromFormat(day.fajr, "TT").toFormat("t"),
    syuruk: DateTime.fromFormat(day.syuruk, "TT").toFormat("t"),
    dhuhr: DateTime.fromFormat(day.dhuhr, "TT").toFormat("t"),
    asr: DateTime.fromFormat(day.asr, "TT").toFormat("t"),
    maghrib: DateTime.fromFormat(day.maghrib, "TT").toFormat("t"),
    isha: DateTime.fromFormat(day.isha, "TT").toFormat("t"),
  }));

  log.info(
    { zone, dataLength: formattedData.length },
    "Successfully formatted data fetched from remote"
  );
  const dataForRedisHash = {};

  // Desired data type
  /* 
    redis:key
    {
      day: JSON string of day data
    }
  */
  formattedData.forEach((day) => {
    dataForRedisHash[day.date] = JSON.stringify(day);
  });

  await redis.hmset(`${BASE_REDIS_KEY}:${zone}`, dataForRedisHash);
};
