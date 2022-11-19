import { getAccounts } from "./dataSource";

export const resolvers = {
  Query: {
    accounts: async () => {
      return getAccounts();
    },
  },
};
