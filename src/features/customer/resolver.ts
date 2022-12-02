import {
  CheckUsernameUniquenessResponse,
  CreateCustomerResponse,
  CreateIamAccountResponse,
  MutationCreateIamAccountArgs,
  MutationCreateInitialCustomerArgs,
  MutationStorePersonalDetailsArgs,
  MutationValidateOtpArgs,
  OtpValidationResponse,
  PersonalDetailsResponse,
  QueryCheckUsernameUniquenessArgs,
} from "../../../generated/graphql";
import { Context } from "../../context/types";

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
      const { id } = await context.dataSources.onboarding.createInitialCustomer(
        args.customerMobileInput
      );

      const customer = await context.dataSources.customer.getCustomerById(id);

      return {
        customerId: id,
        customer: {
          id,
          ...customer,
        },
      };
    },
    createIamAccount: async (
      parent: any,
      args: MutationCreateIamAccountArgs,
      context: Context
    ): Promise<CreateIamAccountResponse> => {
      const iam = await context.dataSources.onboarding.createIamAccount({
        customerId: args.iamAccountInput.customerId,
        email: args.iamAccountInput.email,
        password: args.iamAccountInput.password,
        phoneNumber: args.iamAccountInput.phoneNumber,
        secureword: args.iamAccountInput.secureword,
        username: args.iamAccountInput.username,
      });
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
        customer: await context.dataSources.customer.getCustomerById(
          args.personalDetailsInput.customerId
        ),
        requestId: "String",
      };
    },
    validateOtp: async (
      parent: any,
      args: MutationValidateOtpArgs,
      context: Context
    ): Promise<OtpValidationResponse> => {
      const verification = await context.dataSources.onboarding.verifyOtp({
        customerId: args.otpValidationInput.customerId,
        phoneNumber: args.otpValidationInput.phoneNumber,
        deviceInstallationId: args.otpValidationInput.deviceInstallationId,
        otp: args.otpValidationInput.otp,
      });

      return {
        status: verification.status,
      };
    },
  },
};
