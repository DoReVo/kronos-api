export default {
  type: "object",
  required: ["NODE_ENV", "PORT", "WELCOME_MESSAGE", "REDIS_HOST"],
  properties: {
    NODE_ENV: {
      type: "string",
      default: "development",
    },
    PORT: {
      type: "number",
      default: 3500,
    },
    WELCOME_MESSAGE: {
      type: "string",
      default: "Hello world",
    },
    REDIS_HOST: {
      type: "string",
    },
  },
};
