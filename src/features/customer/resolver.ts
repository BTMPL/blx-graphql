import {
  AddressEnum,
  CheckUsernameUniquenessResponse,
  CreateCustomerResponse,
  CreateIamAccountResponse,
  CustomerAccountStatus,
  CustomerDepositAccountStatus,
  CustomerOverallStatus,
  CustomerStatusValue,
  MutationCreateIamAccountArgs,
  MutationCreateInitialCustomerArgs,
  MutationStorePersonalDetailsArgs,
  MutationValidateOtpArgs,
  OtpValidationResponse,
  OtpValidationStatus,
  PersonalDetailsResponse,
  QueryCheckUsernameUniquenessArgs,
} from "../../../generated/graphql";
import { Context } from "../../context/types";

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
      acceptedDocumentId: 5,
      acceptedDocumentString: "String",
      acceptedDocumentDate: new Date().toDateString(),
      document: {
        id: 5,
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

export const resolvers = {
  Query: {
    checkUsernameUniqueness: async (
      _: any,
      args: QueryCheckUsernameUniquenessArgs,
      context: Context
    ): Promise<CheckUsernameUniquenessResponse> => {
      return {
        usernameIsUnique: true,
      };
    },
  },
  Mutation: {
    createInitialCustomer: async (
      parent: any,
      args: MutationCreateInitialCustomerArgs,
      context: Context
    ): Promise<CreateCustomerResponse> => {
      return {
        customerId: "1234",
        customer: mockCustomer(),
      };
    },
    createIamAccount: async (
      parent: any,
      args: MutationCreateIamAccountArgs,
      context: Context
    ): Promise<CreateIamAccountResponse> => {
      return {
        pingoneUserId: "String",
        requestId: "String",
      };
    },
    storePersonalDetails: async (
      parent: any,
      args: MutationStorePersonalDetailsArgs,
      context: Context
    ): Promise<PersonalDetailsResponse> => {
      return {
        customer: mockCustomer(),
        requestId: "String",
      };
    },
    validateOtp: async (
      parent: any,
      args: MutationValidateOtpArgs,
      context: Context
    ): Promise<OtpValidationResponse> => {
      return {
        requestId: "String",
        status: OtpValidationStatus.Approved,
      };
    },
  },
};
