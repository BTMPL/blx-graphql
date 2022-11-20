import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginLandingPageDisabled } from "@apollo/server/plugin/disabled";
import { startStandaloneServer } from "@apollo/server/standalone";
import { makeExecutableSchema } from "@graphql-tools/schema";
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
  plugins: [
    config.logging && logPlugin(),
    !config.enableLandingPage && ApolloServerPluginLandingPageDisabled(),
  ].filter(Boolean),
});

startStandaloneServer(server, {
  listen: { port: config.port },
  context: context(server),
}).then(() => console.log(`App started on port ${config.port}`));
