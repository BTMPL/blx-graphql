import { resolvers as users } from "./features/onboarding/resolver";
import { resolvers as accounts } from "./features/accounts/resolver";

type Reducer = Record<string, Record<string, Function>>;

const enabledResolvers: Reducer[] = [users, accounts];

export const resolvers = enabledResolvers.reduce((merged, resolver) => {
  Object.entries(resolver).forEach(([group, functions]) => {
    if (!merged[group]) merged[group] = {};
    merged[group] = {
      ...merged[group],
      ...functions,
    };
  });
  return merged;
}, {});

// export const resolvers = {
//   Query: enabledResolvers.reduce((accumulator, item: Reducer) => {
//     return {
//       ...accumulator,
//       ...(item.Query || {}),
//     };
//   }, {}),
//   Mutation: enabledResolvers.reduce((accumulator, item: Reducer) => {
//     return {
//       ...accumulator,
//       ...(item.Mutation || {}),
//     };
//   }, {}),
// };
