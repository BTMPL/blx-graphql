import { resolvers as customer } from "./customer/resolver";
import { resolvers as documents } from "./documents/resolver";
import { resolvers as depositAccount } from "./depositAccount/resolver";
import {
  CustomerAPI,
  CustomerIamAPI,
  OnboardingAPI,
} from "./customer/dataSource";
import { AccountAPI } from "./depositAccount/dataSource";
import { DocumentsAPI } from "./documents/dataSource";

export const resolvers = [customer, depositAccount, documents];

export interface DataSources {
  customer: CustomerAPI;
  customerIam: CustomerIamAPI;
  depositAccount: AccountAPI;
  documents: DocumentsAPI;
  onboarding: OnboardingAPI;
}

export const dataSources = {
  customer: CustomerAPI,
  customerIam: CustomerIamAPI,
  depositAccount: AccountAPI,
  documents: DocumentsAPI,
  onboarding: OnboardingAPI,
};
