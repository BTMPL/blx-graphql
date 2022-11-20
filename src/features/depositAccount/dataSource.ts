import { DepositAccount } from "../../../generated/graphql";
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

  async getAccounts(): Promise<DepositAccount[]> {
    return accounts;
  }

  async getAccountsByUser(userId: string): Promise<DepositAccount[]> {
    return accounts;
  }
}
