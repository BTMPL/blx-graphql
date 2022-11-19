import { resolvers as customer } from "./customer/resolver";
import { resolvers as accounts } from "./accounts/resolver";
import { CustomerAPI } from "./customer/dataSource";
import { AccountAPI } from "./accounts/dataSource";

export const resolvers = [customer, accounts];

export interface DataSources {
  customer: CustomerAPI;
  account: AccountAPI;
}

export const dataSources = {
  customer: CustomerAPI,
  account: AccountAPI,
};
