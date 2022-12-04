import { GraphQLError, GraphQLErrorOptions } from "graphql";

export class MicroserviceError extends GraphQLError {
  constructor(
    message: string = "Microservice call failed",
    options: GraphQLErrorOptions = {}
  ) {
    super(message, {
      ...options,
      extensions: {
        ...(options?.extensions || {}),
        code: "MICROSERVICE_ERROR",
      },
    });
  }
}
