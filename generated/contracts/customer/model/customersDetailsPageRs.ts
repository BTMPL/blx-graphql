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
import { CustomerDetailsRs } from './customerDetailsRs';


export interface CustomersDetailsPageRs { 
    customers?: Array<CustomerDetailsRs>;
    /**
     * Amount of all customers pages
     */
    totalPages?: number;
    /**
     * Amount of all customers
     */
    totalElements?: number;
}

