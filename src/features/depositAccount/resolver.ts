import { getAccounts } from "./dataSource";

export const resolvers = {
  Query: {
    depositAccount: async () => {
      return getAccounts();
    },
  },
};
