/**
 * Onboarding service API
 * The onboarding service API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface OtpValidationResponse { 
    /**
     * Status of otp validation
     */
    status: OtpValidationResponse.StatusEnum;
}
export namespace OtpValidationResponse {
    export type StatusEnum = 'FAILED' | 'APPROVED' | 'APPROVED_ALREADY_EXISTS';
    export const StatusEnum = {
        Failed: 'FAILED' as StatusEnum,
        Approved: 'APPROVED' as StatusEnum,
        ApprovedAlreadyExists: 'APPROVED_ALREADY_EXISTS' as StatusEnum
    };
}

