import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { Context, context } from "./context";
import { authDirective, getUser } from "./context/auth";

import { resolvers } from "./resolvers";
import typeDefs from "./typedefs";

const { authDirectiveTypeDefs, authDirectiveTransformer } = authDirective(
  "auth",
  getUser
);

const schema = authDirectiveTransformer(
  makeExecutableSchema({
    typeDefs: [authDirectiveTypeDefs, typeDefs],
    resolvers: resolvers,
  })
);

const server = new ApolloServer<Context>({ schema });

startStandaloneServer(server, {
  listen: { port: 4000 },
  context: context(server),
}).then(() => console.log("App started on port 4000"));
