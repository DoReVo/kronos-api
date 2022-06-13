export default {
  type: "object",
  properties: {
    prayerTime: {
      type: "array",
      items: {
        type: "object",
        properties: {
          hijri: {
            type: "string",
          },
          date: {
            type: "string",
          },
          day: {
            type: "string",
          },
          imsak: {
            type: "string",
          },
          fajr: {
            type: "string",
          },
          syuruk: {
            type: "string",
          },
          dhuhr: {
            type: "string",
          },
          asr: {
            type: "string",
          },
          maghrib: {
            type: "string",
          },
          isha: {
            type: "string",
          },
        },
        required: [
          "hijri",
          "date",
          "day",
          "imsak",
          "fajr",
          "syuruk",
          "dhuhr",
          "asr",
          "maghrib",
          "isha",
        ],
      },
    },
  },
  additionalProperties: true,
  required: ["prayerTime"],
};
