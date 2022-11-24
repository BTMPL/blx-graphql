import { ApolloServer, ContextFunction } from "@apollo/server";
import { ApolloServerPluginLandingPageDisabled } from "@apollo/server/plugin/disabled";
import { makeExecutableSchema } from "@graphql-tools/schema";

import {
  ExpressContextFunctionArgument,
  expressMiddleware,
} from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import { context } from "./context";
import { Context } from "./context/types";
import { authDirective } from "./context/auth";
import { logPlugin } from "./context/log";

import { resolvers } from "./resolvers";
import typeDefs from "./typedefs";
import { config } from "./config";

const { authDirectiveTypeDefs, authDirectiveTransformer } = authDirective();

const schema = authDirectiveTransformer(
  makeExecutableSchema({
    typeDefs: [authDirectiveTypeDefs, typeDefs],
    resolvers: resolvers,
  })
);

const server = new ApolloServer<Context>({
  schema,
  introspection: config.introspection,
  plugins: [
    config.logging && logPlugin(),
    !config.enableLandingPage && ApolloServerPluginLandingPageDisabled(),
  ].filter(Boolean),
});

async function initServer(
  server: ApolloServer<Context>,
  options: {
    port: number;
    context: ContextFunction<[ExpressContextFunctionArgument], Context>;
  }
) {
  const app: express.Express = express();
  const httpServer: http.Server = http.createServer(app);

  server.addPlugin(
    ApolloServerPluginDrainHttpServer({ httpServer: httpServer })
  );

  await server.start();

  app.use(
    cors(),
    bodyParser.json(),
    expressMiddleware(server, { context: options.context })
  );

  await new Promise<void>((resolve) => {
    httpServer.listen(
      {
        port: options.port,
      },
      resolve
    );
  });

  return { port: options.port };
}

initServer(server, {
  port: config.port,
  context: context(server),
}).then(({ port }: { port: number }) =>
  console.log(`App started on port ${port}`)
);
