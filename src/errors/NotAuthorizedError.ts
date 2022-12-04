import { GraphQLError, GraphQLErrorOptions } from "graphql";

export class NotAuthorizedError extends GraphQLError {
  constructor(
    message: string = "Not authorized",
    options: GraphQLErrorOptions = {}
  ) {
    super(message, {
      ...options,
      extensions: {
        ...(options?.extensions || {}),
        code: "JWT_MISSING_OR_EXPIRED",
      },
    });
  }
}
