import {
  Address,
  CustomerDetailsRs,
} from "../../../generated/contracts/customer/model/models";
import {
  EmploymentData,
  StorePersonalDetailsRequest,
} from "../../../generated/contracts/onboarding/model/models";
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
  PersonalDetailsInput,
  PersonalDetailsResponse,
  QueryCheckUsernameUniquenessArgs,
  RefreshTokensResponse,
} from "../../../generated/graphql";
import { Context } from "../../context/types";

function facadeCustomer(customer: CustomerDetailsRs): CustomerDetailsResponse {
  return {
    ...customer,
    employments: customer.employments.map((employment) => {
      return {
        ...employment,
      };
    }),
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

function facadePersonalDetails(
  details: PersonalDetailsInput
): StorePersonalDetailsRequest {
  const payload = {
    acceptedDocuments: details.acceptedDocuments,
    customerId: details.customerId,
    employment: {
      employmentType:
        EmploymentData.EmploymentTypeEnum[details.employment?.employmentType],
      annualIncomeBracket:
        EmploymentData.AnnualIncomeBracketEnum[
          details.employment?.annualIncomeBracket
        ],
      employer: details.employment.employer,
      employmentSector:
        EmploymentData.EmploymentSectorEnum[
          details.employment.employmentSector
        ],
      occupation: EmploymentData.OccupationEnum[details.employment.occupation],
    },
    mailingAddressSameAsResidence: details.mailingAddressSameAsResidence,
    mobilePreferences: {},
    profiles: {
      accountSettingUpReasons: details.profiles.accountSettingUpReasons,
      ethnicity: details.profiles.ethnicity,
      maritalStatus: details.profiles.maritalStatus,
    },
    email: details.email,
    mailingAddress: {
      city: details.mailingAddress.city,
      countryCode: details.mailingAddress.countryCode,
      postalCode: details.mailingAddress.postalCode,
      subdivision: details.mailingAddress.subdivision,
      type: Address.TypeEnum[details.mailingAddress.type],
      line1: details.mailingAddress.line1,
      line2: details.mailingAddress.line2,
      line3: details.mailingAddress.line3,
      line4: details.mailingAddress.line4,
      line5: details.mailingAddress.line5,
    },
    nickname: details.nickname,
  };

  if (details.mailingAddressSameAsResidence) {
    delete payload.mailingAddress;
  }

  return payload;
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
      const store = await context.dataSources.onboarding.storePersonalDetails(
        facadePersonalDetails(args.personalDetailsInput)
      );

      /**
       * There's a race condition, at leas when developing, that results in the data being
       * fetched from the customer service before the onboarding service updates it. We add
       * a 1 second pause to give the microservices time to update the data.
       */
      await new Promise((res) => setTimeout(res, 1 * 1000));

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
