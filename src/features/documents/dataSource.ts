import { Document } from "../../../generated/graphql";
import { config } from "../../config";
import { AuthenticatedRESTDataSource } from "../../dataSource";

export class DocumentsAPI extends AuthenticatedRESTDataSource {
  override baseURL = config.services.documents.url;

  async getDocuments(): Promise<Document[]> {
    return this.get("/v1/documents");
  }
}
