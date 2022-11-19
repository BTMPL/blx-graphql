import { RESTDataSource } from "@apollo/datasource-rest";
import { User } from "../../../generated/graphql";

const users = [
  {
    id: "1",
    name: "The first user",
  },
  {
    id: "2",
    name: "The second user",
  },
];

export class CustomerAPI extends RESTDataSource {
  override baseURL = "https://movies-api.example.com/";

  async getUserById(customerId: string): Promise<User> {
    // return this.get<User>(`/v1/customers/${customerId}`);

    return users.find((u) => u.id === customerId);
  }

  async getAllUsers(): Promise<User[]> {
    return users;
  }
}
