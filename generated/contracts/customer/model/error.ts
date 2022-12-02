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


export interface ModelError { 
    /**
     * Human readable, unique name of the error.
     */
    name: string;
    /**
     * Message describing the error.
     */
    message: string;
    /**
     * Error id to easy search in logs.
     */
    error_id: string;
}

