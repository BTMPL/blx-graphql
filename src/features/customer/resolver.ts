import { Context } from "../../context";
import { Account, MutationLoginArgs, User } from "../../../generated/graphql";

export const resolvers = {
  Query: {
    users: async (_, __, context: Context): Promise<User[]> => {
      return await context.dataSources.customer.getAllUsers();
    },
  },
  Mutation: {
    login: async (
      parent,
      args: MutationLoginArgs,
      context: Context
    ): Promise<User> => {
      return await context.dataSources.customer.getUserById(args.id);
    },
  },
  User: {
    accounts: async (
      parent: User,
      args,
      context: Context
    ): Promise<Account[]> => {
      return context.dataSources.account.getAccountsByUser(parent.id);
    },
  },
};
