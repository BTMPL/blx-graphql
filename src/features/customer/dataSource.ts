import { AuthenticatedRESTDataSource } from "../../dataSource";

export class CustomerAPI extends AuthenticatedRESTDataSource {
  override baseURL = "https://movies-api.example.com/";

  // async getUserById(customerId: string): Promise<User> {
  //   // return this.get<User>(`/v1/customers/${customerId}`);
  //   return users.find((u) => u.id === customerId);
  // }

  // async getAllUsers(): Promise<User[]> {
  //   return users;
  // }
}
