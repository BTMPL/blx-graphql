import { getAccounts } from "./dataSource";

export const resolvers = {
  Query: {
    accounts: async () => {
      console.log("accounts resolver called");
      return getAccounts();
    },
  },
};
