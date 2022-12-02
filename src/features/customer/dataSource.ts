import { AuthenticatedRESTDataSource } from "../../dataSource";

import { config } from "../../config";
import { CustomerDetailsRs } from "../../../generated/contracts/customer/model/models";

export class CustomerAPI extends AuthenticatedRESTDataSource {
  override baseURL = config.services.customer.url;

  async getCustomerById(id: string): Promise<CustomerDetailsRs> {
    return await this.get(`/v1/customers/${id}`);
  }
}
