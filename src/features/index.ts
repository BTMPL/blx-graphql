import { resolvers as customer } from "./customer/resolver";
import { resolvers as depositAccount } from "./depositAccount/resolver";
import { CustomerAPI } from "./customer/dataSource";
import { AccountAPI } from "./depositAccount/dataSource";

export const resolvers = [customer, depositAccount];

export interface DataSources {
  customer: CustomerAPI;
  depositAccount: AccountAPI;
}

export const dataSources = {
  customer: CustomerAPI,
  depositAccount: AccountAPI,
};
