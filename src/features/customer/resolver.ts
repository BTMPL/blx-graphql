import { Account, MutationLoginArgs, User } from "../../../generated/graphql";
import { Context } from "../../context/types";

export const resolvers = {
  Query: {
    users: async (_: any, __: any, context: Context): Promise<User[]> => {
      return await context.dataSources.customer.getAllUsers();
    },
  },
  Mutation: {
    login: async (
      parent: any,
      args: MutationLoginArgs,
      context: Context
    ): Promise<User> => {
      return await context.dataSources.customer.getUserById(args.id);
    },
  },
  User: {
    accounts: async (
      parent: User,
      args: any,
      context: Context
    ): Promise<Account[]> => {
      return context.dataSources.account.getAccountsByUser(parent.id);
    },
  },
};
