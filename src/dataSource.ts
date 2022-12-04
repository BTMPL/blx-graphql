import { v4 } from "uuid";
import {
  RequestOptions,
  RESTDataSource,
  WillSendRequestOptions,
} from "@apollo/datasource-rest";
import { ApolloServer } from "@apollo/server";
import { Context } from "./context/types";
import { MicroserviceError } from "./errors/MicroserviceError";
import { config } from "./config";

export class AuthenticatedRESTDataSource extends RESTDataSource {
  protected token: string = "";
  protected requestId: string = "";

  constructor(options: {
    token?: string;
    requestId: string;
    cache: ApolloServer<Context>["cache"];
  }) {
    super(options);
    this.token = options.token;
    this.requestId = options.requestId;
  }

  protected override willSendRequest(
    request: WillSendRequestOptions
  ): void | Promise<void> {
    if (this.token && !request.headers["authorization"]) {
      request.headers["authorization"] = `Bearer ${this.token}`;
    }

    request.headers["x-request-id"] = this.requestId || v4();
  }

  protected override didEncounterError(
    error: Error,
    _request: RequestOptions
  ): void {
    throw new MicroserviceError(undefined, {
      extensions: {
        xRequestId: this.requestId,
        originalError: config.preserveOriginalError ? error : undefined,
      },
    });
  }
}
