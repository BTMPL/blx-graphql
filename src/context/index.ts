import { ApolloServer } from "@apollo/server";
import { ExpressContextFunctionArgument } from "@apollo/server/dist/esm/express4";

import { DataSources, dataSources } from "../features";
import { authContext } from "./auth";
import { Context } from "./types";

const data = ({
  server,
  token,
  requestId,
}: {
  server: ApolloServer<Context>;
  token: string;
  requestId: string;
}) =>
  Object.entries(dataSources).reduce((accumulator, [name, source]) => {
    return {
      ...accumulator,
      [name]: new source({
        cache: server.cache,
        requestId,
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
      // @TODO fix request id, make sure it's stable in session
      dataSources: data({
        server,
        token: auth.jwt,
        requestId: "aaaa3c25-1c6a-4101-9f33-8b3cb67ab74a",
      }),
    };
  };
