import { Document } from "../../../generated/graphql";
import { Context } from "../../context/types";

export const resolvers = {
  Query: {
    documents: async (
      parent: void,
      arg: void,
      context: Context
    ): Promise<Document[]> => {
      return context.dataSources.documents.getDocuments();
    },
  },
};
