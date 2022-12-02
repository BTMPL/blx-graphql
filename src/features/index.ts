import { resolvers as customer } from "./customer/resolver";
import { resolvers as documents } from "./documents/resolver";
import { resolvers as depositAccount } from "./depositAccount/resolver";
import { CustomerAPI } from "./customer/dataSource";
import { AccountAPI } from "./depositAccount/dataSource";
import { DocumentsAPI } from "./documents/dataSource";
import { OnboardingAPI } from "./onboarding/dataSource";

export const resolvers = [customer, depositAccount, documents];

export interface DataSources {
  customer: CustomerAPI;
  depositAccount: AccountAPI;
  documents: DocumentsAPI;
  onboarding: OnboardingAPI;
}

export const dataSources = {
  customer: CustomerAPI,
  depositAccount: AccountAPI,
  documents: DocumentsAPI,
  onboarding: OnboardingAPI,
};
