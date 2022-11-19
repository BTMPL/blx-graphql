import { Resolvers } from "../generated/graphql";

import { resolvers as ownResolvers } from "./features";

export const resolvers: Resolvers = ownResolvers.reduce((merged, resolver) => {
  Object.entries(resolver).forEach(([group, functions]) => {
    if (!merged[group]) merged[group] = {};
    merged[group] = {
      ...merged[group],
      ...functions,
    };
  });
  return merged;
}, {});
