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


export interface CustomerEmploymentDataResponse { 
    /**
     * Customer\'s employment id
     */
    id?: string;
    /**
     * Customer\'s employer
     */
    employer?: string;
    /**
     * Employment type
     */
    employmentType: string;
    /**
     * Employment sector
     */
    employmentSector?: string;
    /**
     * Customer\'s occupation
     */
    occupation?: string;
    /**
     * Customer\'s annual income bracket
     */
    annualIncomeBracket?: string;
    version?: number;
}
