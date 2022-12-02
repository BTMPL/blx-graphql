import { OtpValidationStatus } from "../../../generated/graphql";
import { config } from "../../config";
import { AuthenticatedRESTDataSource } from "../../dataSource";

export type InitialCustomerInput = {
  deviceInstallationId?: string;
  deviceModel: string;
  deviceOs: string;
  phoneNumber: string;
};

export type InitialCustomer = {
  id: string;
  deviceInstallationId: string;
};

export type OtpVerificationInput = {
  customerId: string;
  phoneNumber: string;
  deviceInstallationId: string;
  otp: string;
};

export type OtpVerification = {
  status: OtpValidationStatus;
};

export type IamAccountInput = {
  customerId: string;
  email: string;
  username: string;
  password: string;
  secureword: string;
  phoneNumber: string;
};

export type IamAccount = {};

export class OnboardingAPI extends AuthenticatedRESTDataSource {
  override baseURL = config.services.onboarding.url;

  async createInitialCustomer(
    initialCustomerInput: InitialCustomerInput
  ): Promise<InitialCustomer> {
    return await this.post("/v1/initial-customers", {
      body: {
        phoneNumber: initialCustomerInput.phoneNumber,
        deviceOs: initialCustomerInput.deviceOs,
        deviceModel: initialCustomerInput.deviceModel,
        deviceInstallationId: initialCustomerInput.deviceInstallationId,
      },
    });
  }

  async verifyOtp(input: OtpVerificationInput): Promise<OtpVerification> {
    console.log({
      customerId: input.customerId,
      phoneNumber: input.phoneNumber,
      deviceInstallationId: input.deviceInstallationId,
      otp: input.otp,
    });
    return await this.post("/v1/validate-otp", {
      body: {
        customerId: input.customerId,
        phoneNumber: input.phoneNumber,
        deviceInstallationId: input.deviceInstallationId,
        otp: input.otp,
      },
    });
  }

  async createIamAccount(input: IamAccountInput): Promise<IamAccount> {
    // @TODO make the actual call once pingeon is fixed
    return {};
  }
}
