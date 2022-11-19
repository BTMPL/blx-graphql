import { Context } from "../../context";
import { Account, MutationLoginArgs, User } from "../../../generated/graphql";
import { getAccountsByUser } from "../accounts/api";
import * as api from "./api";

export const resolvers = {
  Query: {
    users: async (_, __, context): Promise<User[]> => {
      console.log(context);
      return await api.getAllUsers();
    },
  },
  Mutation: {
    login: async (
      parent,
      args: MutationLoginArgs,
      context: Context
    ): Promise<User> => {
      return await api.getUserById(args.id);
    },
  },
  User: {
    accounts: async (parent: User): Promise<Account[]> => {
      return Promise.resolve([getAccountsByUser(parent.id)]);
    },
  },
};
