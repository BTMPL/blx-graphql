export const logPlugin = {
  async requestDidStart(requestContext) {
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
      async willSendResponse(context) {
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
};
