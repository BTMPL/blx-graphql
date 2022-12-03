/**
 * Customer service API
 * API allow performing operations related to CRM
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface CustomerEmploymentUpdateRequest { 
    /**
     * Annual income bracket
     */
    annualIncomeBracket: CustomerEmploymentUpdateRequest.AnnualIncomeBracketEnum;
}
export namespace CustomerEmploymentUpdateRequest {
    export type AnnualIncomeBracketEnum = 'LESS_THAN_RM12000' | 'RM12000_RM17999' | 'RM18000_RM23999' | 'RM24000_RM35999' | 'RM36000_RM47999' | 'RM48000_RM71999' | 'RM72000_RM95999' | 'RM96000_RM119999' | 'RM120000_AND_ABOVE';
    export const AnnualIncomeBracketEnum = {
        LESS_THAN_RM12000: 'LESS_THAN_RM12000' as AnnualIncomeBracketEnum,
        RM12000_RM17999: 'RM12000_RM17999' as AnnualIncomeBracketEnum,
        RM18000_RM23999: 'RM18000_RM23999' as AnnualIncomeBracketEnum,
        RM24000_RM35999: 'RM24000_RM35999' as AnnualIncomeBracketEnum,
        RM36000_RM47999: 'RM36000_RM47999' as AnnualIncomeBracketEnum,
        RM48000_RM71999: 'RM48000_RM71999' as AnnualIncomeBracketEnum,
        RM72000_RM95999: 'RM72000_RM95999' as AnnualIncomeBracketEnum,
        RM96000_RM119999: 'RM96000_RM119999' as AnnualIncomeBracketEnum,
        RM120000_AND_ABOVE: 'RM120000_AND_ABOVE' as AnnualIncomeBracketEnum
    };
}


