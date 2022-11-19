import * as dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "development";
dotenv.config({
  path:
    process.env.NODE_ENV === "production"
      ? ".env"
      : require("fs").existsSync(`.env.${process.env.NODE_ENV}.local`)
      ? `.env.${process.env.NODE_ENV}.local`
      : `.env.${process.env.NODE_ENV}`,
});

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { context } from "./context";
import { Context } from "./context/types";
import { authDirective } from "./context/auth";
import { logPlugin } from "./context/log";

import { resolvers } from "./resolvers";
import typeDefs from "./typedefs";

const { authDirectiveTypeDefs, authDirectiveTransformer } = authDirective();

const schema = authDirectiveTransformer(
  makeExecutableSchema({
    typeDefs: [authDirectiveTypeDefs, typeDefs],
    resolvers: resolvers,
  })
);

const server = new ApolloServer<Context>({
  schema,
  plugins: [process.env.LOGGER === "true" && logPlugin].filter(Boolean),
});

const port = parseInt(process.env.PORT) || 4000;

startStandaloneServer(server, {
  listen: { port },
  context: context(server),
}).then(() => console.log(`App started on port ${port}`));
