import { AuthenticatedRESTDataSource } from "../../dataSource";

import { config } from "../../config";
import { CustomerDetailsRs } from "../../../generated/contracts/customer/model/models";

import {
  CustomerCreatedResponse,
  CustomerCreationRequest,
  IamRequest,
  IamResponse,
  OtpValidationRequest,
  OtpValidationResponse,
  StorePersonalDetailsRequest,
} from "../../../generated/contracts/onboarding/model/models";
import {
  CompleteLoginRequest,
  CompleteLoginResponse,
  GenerateAndRefreshAuthTokenResponse,
  InitializeFirstLoginRequest,
  InitializeFirstLoginResponse,
} from "../../../generated/contracts/customer-iam/model/models";

export class CustomerAPI extends AuthenticatedRESTDataSource {
  override baseURL = config.services.customer.url;

  async getCustomerById(
    id: string
  ): Promise<CustomerDetailsRs & { requestId: string }> {
    const data = await this.get(`/v1/customers/${id}`);
    return {
      ...data,
      requestId: this.requestId,
    };
  }
}

export class CustomerIamAPI extends AuthenticatedRESTDataSource {
  override baseURL = config.services.customerIam.url;

  async loginInitialize(
    input: InitializeFirstLoginRequest
  ): Promise<InitializeFirstLoginResponse> {
    return await this.post(`/v1/first-login/initialize`, {
      body: {
        username: input.username,
        password: input.password,
        mobilePayload: input.mobilePayload,
      },
    });
  }

  async loginComplete(
    input: CompleteLoginRequest
  ): Promise<CompleteLoginResponse> {
    return await this.post(`/v1/login/complete`, {
      body: {
        flowId: input.flowId,
        otp: input.otp,
      },
    });
  }

  async logoutUser(customerId: string) {
    return await this.post(`/v1/logout/${customerId}`);
  }

  async refreshToken(
    refreshToken: string
  ): Promise<GenerateAndRefreshAuthTokenResponse> {
    return await this.post(`/v1/refresh-token`);
  }
}

export class OnboardingAPI extends AuthenticatedRESTDataSource {
  override baseURL = config.services.onboarding.url;

  async createInitialCustomer(
    initialCustomerInput: CustomerCreationRequest
  ): Promise<CustomerCreatedResponse> {
    return await this.post("/v1/initial-customers", {
      body: {
        phoneNumber: initialCustomerInput.phoneNumber,
        deviceOs: initialCustomerInput.deviceOs,
        deviceModel: initialCustomerInput.deviceModel,
        deviceInstallationId: initialCustomerInput.deviceInstallationId,
      },
    });
  }

  async verifyOtp(input: OtpValidationRequest): Promise<OtpValidationResponse> {
    return await this.post("/v1/validate-otp", {
      body: {
        customerId: input.customerId,
        phoneNumber: input.phoneNumber,
        deviceInstallationId: input.deviceInstallationId,
        otp: input.otp,
      },
    });
  }

  async createIamAccount(
    input: IamRequest
  ): Promise<IamResponse & { requestId: string }> {
    const body: IamRequest = {
      customerId: input.customerId,
      email: input.email,
      username: input.username,
      secureword: input.secureword,
      phoneNumber: input.phoneNumber,
      password: input.password,
    };
    const data = await this.post(`/v1/create-iam-account`, {
      body,
    });

    return {
      ...data,
      requestId: this.requestId,
    };
  }

  async storePersonalDetails(input: StorePersonalDetailsRequest) {
    return this.post(`/v1/personal-details`, {
      body: input,
    });
  }
}
