import "./loadEnv";

import Fastify, { FastifyPluginCallback } from "fastify";
import { clerkClient, clerkPlugin, getAuth } from "@clerk/fastify";
import cors from "@fastify/cors";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.FASTIFY_PORT ? parseInt(process.env.FASTIFY_PORT) : 3000;

const fastify = Fastify({ logger: true });

fastify.register(cors, {
  origin: "*",
});

/**
 * Register Clerk only for a subset of your routes
 */
const protectedRoutes: FastifyPluginCallback = (instance, opts, done) => {
  instance.register(clerkPlugin);
  instance.post("/protected", async (request, reply) => {
    const { userId } = getAuth(request);
    if (!userId) {
      return reply.code(403).send();
    }

    const user = await clerkClient.users.getUser(userId);
    return { user };
  });
  done();
};

const publicRoutes: FastifyPluginCallback = (instance, opts, done) => {
  instance.get("/", async (request, reply) => {
    return {
      message: "This is a public endpoint. Request /protected to test the Clerk auth middleware",
    };
  });
  done();
};

/**
 * Register your routes as you normally would
 */
fastify.register(protectedRoutes);
fastify.register(publicRoutes);

const start = async () => {
  try {
    await fastify.listen({ port: PORT });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
