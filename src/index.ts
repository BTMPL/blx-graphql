import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { resolvers } from "./resolvers";
import typeDefs from "./typedefs";

console.log(resolvers);

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(() => console.log("App started on port 4000"));
