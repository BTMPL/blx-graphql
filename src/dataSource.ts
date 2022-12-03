import { v4 } from "uuid";
import {
  RESTDataSource,
  WillSendRequestOptions,
} from "@apollo/datasource-rest";
import { ApolloServer } from "@apollo/server";
import { Context } from "./context/types";

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
}
