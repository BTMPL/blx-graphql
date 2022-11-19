import { Fetcher } from "openapi-typescript-fetch";
import { paths } from "../../../generated/api/src/contracts/customerService/openapi";

const fetcher = Fetcher.for<paths>();
fetcher.configure({
  baseUrl: "/",
});

const findCustomerById = fetcher
  .path("/v1/customers/{customerId}")
  .method("get")
  .create();

async function test() {
  try {
    console.log("try fetch");
    const data = await findCustomerById({ customerId: "5" });
    console.log(data);
    return data.data;
  } catch (e) {
    console.log(e);
  }
}

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

export const getUserById = (id: string) => Promise.resolve(users[0]);
export const getAllUsers = () => {
  try {
    test();
  } catch (e) {
    console.log(e);
  }
  return Promise.resolve(users);
};
