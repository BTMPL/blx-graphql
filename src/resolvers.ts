import { resolvers as users } from "./features/onboarding/resolver";
import { resolvers as accounts } from "./features/accounts/resolver";
import { Resolvers } from "../generated/graphql";

const enabledResolvers = [users, accounts];

export const resolvers: Resolvers = enabledResolvers.reduce(
  (merged, resolver) => {
    Object.entries(resolver).forEach(([group, functions]) => {
      if (!merged[group]) merged[group] = {};
      merged[group] = {
        ...merged[group],
        ...functions,
      };
    });
    return merged;
  },
  {}
);
