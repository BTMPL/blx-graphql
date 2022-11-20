import { GraphQLRequestContext, GraphQLResponse } from "@apollo/server";
import { Context } from "./types";

export const logPlugin = () => ({
  async requestDidStart(requestContext: GraphQLRequestContext<Context>) {
    if (requestContext.request.operationName === "IntrospectionQuery") return;

    console.log({
      type: "request",
      query: requestContext.request.query,
      variables: requestContext.request.variables,
      user: {
        id: requestContext.contextValue.auth.id,
      },
    });

    return {
      async willSendResponse(context: GraphQLRequestContext<Context>) {
        if (context.request.operationName === "IntrospectionQuery") return;
        console.log({
          type: "response",
          response: context.response.body,
          user: {
            id: context.contextValue.auth.id,
          },
        });
      },
    };
  },
});
