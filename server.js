import fastify from "fastify";
import fastifyEnv from "@fastify/env";
import fastifyRedis from "@fastify/redis";
import EnvConfig from "./src/config/Env.js";
import AjvFormat from "ajv-formats";

// setup fastify instance
export const server = await fastify({
  ajv: {
    plugins: [AjvFormat],
  },
  logger: {
    enabled: true,
  },
  disableRequestLogging: true,
});

// Register env middleware
await server.register(fastifyEnv, {
  dotenv: true,
  schema: EnvConfig,
  confKey: "ENV_DATA",
});

await server.register(fastifyRedis, {
  host: process.env.REDIS_HOST,
});

const start = async () => {
  try {
    // Dynamically import routes
    await import("./src/routes.js");
    const PORT = server.ENV_DATA.PORT;
    await server.listen({
      port: PORT,
      host: "0.0.0.0",
    });
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
