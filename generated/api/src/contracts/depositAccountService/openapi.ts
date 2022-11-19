/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


/** Type helpers */
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
type OneOf<T extends any[]> = T extends [infer Only] ? Only : T extends [infer A, infer B, ...infer Rest] ? OneOf<[XOR<A, B>, ...Rest]> : never;

export interface paths {
  "/saving-accounts/{accountId}/activate": {
    /** @description Activate the account */
    put: operations["activateAccountByAccountId"];
  };
  "/customer-accounts/{customerId}/accounts": {
    /** @description Get all customer's accounts */
    get: operations["getCustomerAccounts"];
  };
}

export type components = Record<string, never>;

export interface external {

  "schemas/account-status-enum.yaml": Record<string, never>
  "schemas/customer-account.yaml": Record<string, never>
  "schemas/problems.yaml": Record<string, never>
  "schemas/saving-account.yaml": Record<string, never>
  "schemas/saving-pot-status-enum.yaml": Record<string, never>
  "schemas/saving-pot.yaml": Record<string, never>
}

export interface operations {

  activateAccountByAccountId: {
    /** @description Activate the account */
    parameters: {
        /** @example 006e19a7-7c0e-63d0-8f7b-b52c483c5278 */
      path: {
        accountId: string;
      };
    };
    responses: {
      /** @description Saving account has been succesfully activated. */
      200: {
        content: {
          "application/json;version=1": external["schemas/saving-account.yaml"]["SavingAccount"];
        };
      };
      /** @description Cannot activate given account, because of validation failure. */
      400: {
        content: {
          "application/problem+json": external["schemas/problems.yaml"]["ErrorResponse"];
        };
      };
      /** @description There is no account with given id. Please review the request argument and send again. */
      404: {
        content: {
          "application/problem+json": external["schemas/problems.yaml"]["ErrorResponse"];
        };
      };
      /** @description We had a problem with our server. Please try again later. */
      500: {
        content: {
          "application/problem+json": external["schemas/problems.yaml"]["ErrorResponse"];
        };
      };
      /** @description Error */
      default: {
        content: {
          "application/problem+json": external["schemas/problems.yaml"]["ErrorResponse"];
        };
      };
    };
  };
  getCustomerAccounts: {
    /** @description Get all customer's accounts */
    parameters: {
        /** @example 1440771331881091600 */
      path: {
        customerId: string;
      };
    };
    responses: {
      /** @description Customer's accounts have been succesfully retrieved. */
      200: {
        content: {
          "application/json;version=1": external["schemas/customer-account.yaml"]["CustomerAccounts"];
        };
      };
      /** @description No accounts found for given customer id. */
      404: {
        content: {
          "application/problem+json": external["schemas/problems.yaml"]["ErrorResponse"];
        };
      };
      /** @description We had a problem with our server. Please try again later. */
      500: {
        content: {
          "application/problem+json": external["schemas/problems.yaml"]["ErrorResponse"];
        };
      };
      /** @description Error */
      default: {
        content: {
          "application/problem+json": external["schemas/problems.yaml"]["ErrorResponse"];
        };
      };
    };
  };
}
