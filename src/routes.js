import { server } from "../server.js";
import {
  OPTIONS,
  VALID_PERIOD,
  VALID_ZONE,
} from "./services/solat/constant.js";
import { getTime } from "./services/solat/index.js";

server.get("/", async () => {
  return { message: "Welcome to Kronos API" };
});

server.get("/selectionoptions", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  return OPTIONS;
});

server.get(
  "/time",
  {
    schema: {
      querystring: {
        type: "object",
        properties: {
          date: {
            type: "string",
            format: "date",
          },
          zone: {
            type: "string",
            enum: VALID_ZONE,
          },
        },
        required: ["date", "zone"],
      },
    },
  },
  async (req, res) => {
    const { date, zone } = req.query;
    const { log } = req;
    res.header("Access-Control-Allow-Origin", "*");

    const data = await getTime(date, zone);

    return data;
  }
);
