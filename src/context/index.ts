import { ApolloServer } from "@apollo/server";
import { ExpressContextFunctionArgument } from "@apollo/server/dist/esm/express4";

import { DataSources, dataSources } from "../features";
import { authContext } from "./auth";
import { Context } from "./types";

const data = ({
  server,
  token,
}: {
  server: ApolloServer<Context>;
  token: string;
}) =>
  Object.entries(dataSources).reduce((accumulator, [name, source]) => {
    return {
      ...accumulator,
      [name]: new source({
        cache: server.cache,
        token,
      }),
    };
  }, {} as DataSources);

export const context =
  (server: ApolloServer<Context>) =>
  async (args: ExpressContextFunctionArgument): Promise<Context> => {
    const auth = await authContext(args);

    return {
      auth,
      dataSources: data({ server, token: auth.jwt }),
    };
  };
