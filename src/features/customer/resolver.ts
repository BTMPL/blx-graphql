import { CustomerDetailsRs } from "../../../generated/contracts/customer/model/models";
import {
  AddressEnum,
  CheckUsernameUniquenessResponse,
  CreateCustomerResponse,
  CreateIamAccountResponse,
  CustomerAccountStatus,
  CustomerDepositAccountStatus,
  CustomerDetailsResponse,
  CustomerOverallStatus,
  CustomerStatusValue,
  InitializeLoginResponse,
  LoginCompleteResponse,
  LoginContext,
  LogoutUserResponse,
  MutationCreateIamAccountArgs,
  MutationCreateInitialCustomerArgs,
  MutationLoginCompleteArgs,
  MutationLoginInitializeArgs,
  MutationRefreshTokensArgs,
  MutationStorePersonalDetailsArgs,
  MutationValidateOtpArgs,
  OtpValidationResponse,
  OtpValidationStatus,
  PersonalDetailsResponse,
  QueryCheckUsernameUniquenessArgs,
  RefreshTokensResponse,
} from "../../../generated/graphql";
import { Context } from "../../context/types";

function facadeCustomer(customer: CustomerDetailsRs): CustomerDetailsResponse {
  return {
    ...customer,
    addresses: customer.addresses.map((address) => {
      return {
        ...address,
        type: AddressEnum[address.type],
      };
    }),
    accounts: customer.accounts.map((account) => {
      return {
        ...account,
        status: CustomerAccountStatus[account.status],
      };
    }),
    statuses: {
      eligibility: CustomerStatusValue[customer.statuses.eligibility],
      identityVerifiaction:
        CustomerStatusValue[customer.statuses.identityVerifiaction],
      crr: CustomerStatusValue[customer.statuses.crr],
      cbs: CustomerStatusValue[customer.statuses.cbs],
      depositAccounts:
        CustomerDepositAccountStatus[customer.statuses.depositAccounts],
      overall: CustomerOverallStatus[customer.statuses.overall],
    },
  };
}

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
          ...facadeCustomer(customer),
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
        pingoneUserId: iam.pingoneUserId,
        requestId: iam.requestId,
      };
    },
    storePersonalDetails: async (
      parent: any,
      args: MutationStorePersonalDetailsArgs,
      context: Context
    ): Promise<PersonalDetailsResponse> => {
      const customer = await context.dataSources.customer.getCustomerById(
        args.personalDetailsInput.customerId
      );

      return {
        customer: facadeCustomer(customer),
        requestId: customer.requestId,
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
        status: OtpValidationStatus[verification.status],
      };
    },
    loginInitialize: async (
      parent: any,
      args: MutationLoginInitializeArgs,
      context: Context
    ): Promise<InitializeLoginResponse> => {
      const data = await context.dataSources.customerIam.loginInitialize({
        username: args.input.username,
        password: args.input.password,
        mobilePayload: args.input.pingOneMobilePayload,
      });

      return {
        flowId: data.flowId,
        expiresAt: data.expiresAt,
      };
    },
    loginComplete: async (
      parent: any,
      args: MutationLoginCompleteArgs,
      context: Context
    ): Promise<LoginCompleteResponse> => {
      const data = await context.dataSources.customerIam.loginComplete({
        flowId: args.input.flowId,
        otp: args.input.otp,
      });
      return {
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        idToken: data.idToken,
        ttl: data.ttl,
        context: LoginContext.RETAIL,
        notificationToken: data.notificationToken,
        usernameToken: data.usernameToken,
      };
    },
    refreshTokens: async (
      parent: any,
      args: MutationRefreshTokensArgs,
      context: Context
    ): Promise<RefreshTokensResponse> => {
      const response = await context.dataSources.customerIam.refreshToken(
        context.auth.refreshToken
      );
      return {
        authTokenInfo: {
          accessToken: response.accessToken,
          idToken: response.idToken,
          refreshToken: response.refreshToken,
          ttl: response.ttl,
          context: LoginContext.RETAIL,
        },
      };
    },
    logoutUser: async (
      parent: any,
      args: void,
      context: Context
    ): Promise<LogoutUserResponse> => {
      const data = await context.dataSources.customerIam.logoutUser(
        context.auth.id
      );
      return {
        success: true,
        message: "",
      };
    },
  },
};
