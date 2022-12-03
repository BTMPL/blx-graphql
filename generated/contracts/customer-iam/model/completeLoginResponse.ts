/**
 * Customer IAM Service API
 * The Customer IAM Service API will allow using Customer IAM Gateway to perform operations related to PingOne
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CompleteLoginResponseAllOf } from './completeLoginResponseAllOf';
import { GenerateAndRefreshAuthTokenResponse } from './generateAndRefreshAuthTokenResponse';


export interface CompleteLoginResponse { 
    accessToken: string;
    refreshToken: string;
    ttl: number;
    idToken: string;
    notificationToken: string;
    usernameToken: string;
    scopes?: Array<string>;
}
