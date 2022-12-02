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


export interface CustomerFramlDetailsRs { 
    /**
     * Customer full name
     */
    fullName?: string;
    /**
     * Creation date time
     */
    dateOfBirth?: string;
    /**
     * Customer place of birth
     */
    placeOfBirth?: string;
    /**
     * Customer nationality
     */
    nationality?: string;
    addressCountry?: string;
    nonResidentCountry?: string;
    mailingAddressCountry?: string;
    IDOrPassportissueCountry?: string;
    employerCountry?: string;
    individualType?: string;
    productServices?: string;
    distributionChannel?: string;
    occupation?: string;
}
