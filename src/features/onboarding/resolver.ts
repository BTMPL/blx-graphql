import * as api from "./api";

export const resolvers = {
  Query: {
    users: async () => {
      console.log("users resolver called");
      return await api.getAllUsers();
    },
  },
  Mutation: {
    login: async (parent, args: { id: string }, context) => {
      return await api.getUserById(args.id);
    },
  },
  User: {
    accounts: (parent, args) => {
      console.log({
        parent,
        args,
      });
      return [{ id: 5, name: "test", balance: 123.0 }];
    },
  },
};
