import { AuthenticatedRESTDataSource } from "../../dataSource";

import {
  AddressEnum,
  CustomerAccountStatus,
  CustomerDepositAccountStatus,
  CustomerOverallStatus,
  CustomerStatusValue,
} from "../../../generated/graphql";
import { config } from "../../config";

const mockCustomer = () => ({
  id: "ID",
  createdAt: new Date().toDateString(),
  updatedAt: new Date().toDateString(),
  firstName: "String",
  lastName: "String",
  nickname: "String",
  phoneNumber: "String",
  email: "String",
  nric: "String",
  username: "String",
  status: "String",
  statuses: {
    eligibility: CustomerStatusValue.NotInitiated,
    identityVerifiaction: CustomerStatusValue.NotInitiated,
    crr: CustomerStatusValue.NotInitiated,
    cbs: CustomerStatusValue.NotInitiated,
    depositAccounts: CustomerDepositAccountStatus.Inactive,
    overall: CustomerOverallStatus.Prospect,
  },
  type: "String",
  mobilePreferences: {
    pushNotificationsAllowed: true,
    marketingEmailFlag: true,
    marketingPhoneCallFlag: true,
    marketingSmsFlag: true,
    marketingPushFlag: true,
  },
  devices: [
    {
      deviceId: "String",
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      deviceOs: "String",
      deviceModel: "String",
      deviceInstallationId: "String",
      deviceStatus: "String",
      phoneNumber: "String",
    },
  ],
  accounts: [
    {
      accountId: "String",
      accountNumber: "String",
      status: CustomerAccountStatus.Inactive,
    },
  ],
  employments: [
    {
      id: 1,
      employer: "String",
      employmentType: "String",
      employmentSector: "String",
      occupation: "String",
      annualIncomeBracket: "String",
      employerName: "String",
    },
  ],
  profiles: {
    maritalStatus: "String",
    ethnicity: "String",
    accountSettingUpReasons: ["String"],
    bnmCcc: "String",
    residencyStatus: "String",
    entityType: 5,
    religion: "String",
    email: "String",
    employment: {
      employmentType: "String",
      employerName: "String",
      occupation: "String",
      employmentSector: "String",
      annualIncomeBracket: "String",
    },
    reasonsForSettingUpTheAccount: ["String"],
  },
  acceptedDocuments: [
    {
      acceptedDocumentId: "5",
      acceptedDocumentString: "String",
      acceptedDocumentDate: new Date().toDateString(),
      document: {
        id: "5",
        url: "String",
        title: "String",
        version: 5,
        type: "String",
        alias: "String",
      },
    },
  ],
  dateOfBirth: "String",
  placeOfBirth: "String",
  gender: "String",
  nationality: "String",
  hasRetailAccount: true,
  hasSmeAccount: true,
  mailingAddressSameAsResidence: true,
  addresses: [
    {
      id: 5,
      line1: "String",
      line2: "String",
      line3: "String",
      line4: "String",
      line5: "String",
      countryCode: "String",
      city: "String",
      postalCode: "String",
      subdivision: "String",
      type: AddressEnum.Residential,
    },
  ],
  iam: {
    username: "String",
    pingOneId: "String",
    secureWord: "String",
  },
  identityVerifications: [
    {
      identityReferenceId: "String",
      startVerificationDate: new Date().toDateString(),
      status: "String",
      documentType: "String",
      documentSubtype: "String",
      documentCountry: "String",
    },
  ],
});

export class CustomerAPI extends AuthenticatedRESTDataSource {
  override baseURL = config.services.customer.url;

  async getCustomerById(id: string) {
    return await this.get(`/v1/customers/${id}`);
  }

  // async getUserById(customerId: string): Promise<User> {
  //   // return this.get<User>(`/v1/customers/${customerId}`);
  //   return users.find((u) => u.id === customerId);
  // }

  // async getAllUsers(): Promise<User[]> {
  //   return users;
  // }
}
