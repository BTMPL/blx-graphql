import {
  CustomerCreatedResponse,
  CustomerCreationRequest,
  IamRequest,
  IamResponse,
  OtpValidationRequest,
  OtpValidationResponse,
} from "../../../generated/contracts/onboarding/model/models";
import { config } from "../../config";
import { AuthenticatedRESTDataSource } from "../../dataSource";

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

  async createIamAccount(input: IamRequest): Promise<IamResponse> {
    // @TODO make the actual call once pingeon is fixed
    return {};
  }
}
