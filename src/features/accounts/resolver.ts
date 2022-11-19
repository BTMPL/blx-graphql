import { getAccounts } from "./api";

export const resolvers = {
  Query: {
    accounts: async () => {
      console.log("accounts resolver called");
      return getAccounts();
    },
  },
};
