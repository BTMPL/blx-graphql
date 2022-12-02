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


export interface DeviceRequest { 
    /**
     * Device operation system
     */
    deviceOs: string;
    /**
     * Device made and model
     */
    deviceModel: string;
    /**
     * Device installation id
     */
    deviceInstallationId: string;
}

