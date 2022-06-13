import { server } from "../server.js";
import {
  OPTIONS,
  VALID_PERIOD,
  VALID_ZONE,
} from "./services/solat/constant.js";
import { getTime } from "./services/solat/index.js";

server.get("/", async () => {
  return { message: server.ENV_DATA.WELCOME_MESSAGE };
});

server.get("/selectionoptions", async (req, res) => {
  console.log("Getting options");
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

    const data = await getTime(date, zone);

    return data;
  }
);
