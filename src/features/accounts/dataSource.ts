import { Account } from "../../../generated/graphql";
import { AuthenticatedRESTDataSource } from "../../dataSource";

const accounts = [
  {
    id: "1",
    name: "test account",
    balance: 1234.56,
  },
];

export const getAccounts = () => accounts;
export const getAccountsByUser = (userId: string) => accounts[0];

export class AccountAPI extends AuthenticatedRESTDataSource {
  override baseURL = "https://movies-api.example.com/";

  async getAccounts(): Promise<Account[]> {
    // return this.get<User>(`/v1/customers/${customerId}`);
    return accounts;
  }

  async getAccountsByUser(userId: string): Promise<Account[]> {
    return accounts;
  }
}
