import { ApolloServer } from "@apollo/server";
import { StandaloneServerContextFunctionArgument } from "@apollo/server/dist/esm/standalone";

import { DataSources, dataSources } from "../features";

import { authContext, Auth } from "./auth";

const data = (cache) =>
  Object.entries(dataSources).reduce((accumulator, [name, source]) => {
    return {
      ...accumulator,
      [name]: new source({ cache }),
    };
  }, {} as DataSources);

export interface Context {
  auth: Auth;
  dataSources: DataSources;
}

export const context =
  (server: ApolloServer<Context>) =>
  async (args: StandaloneServerContextFunctionArgument): Promise<Context> => {
    const auth = await authContext(args);

    return {
      auth,
      dataSources: data(server.cache),
    };
  };
