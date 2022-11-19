import { Resolvers } from "../generated/graphql";
import { Context } from "./context/types";

import { resolvers as ownResolvers } from "./features";

export const resolvers: Resolvers = ownResolvers.reduce((merged, resolver) => {
  Object.entries(resolver).forEach(
    ([group, functions]: [keyof Resolvers<Context>, any]) => {
      if (!merged[group]) merged[group] = {};
      merged[group] = {
        ...merged[group],
        ...functions,
      };
    }
  );
  return merged;
}, {} as Resolvers<Context>);
