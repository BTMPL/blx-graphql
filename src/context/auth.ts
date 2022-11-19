import { StandaloneServerContextFunctionArgument } from "@apollo/server/dist/esm/standalone";
import jwtDecode from "jwt-decode";

interface Token {
  id: string;
  name: string;
}

export interface Auth {
  id?: string;
  name?: string;
}

export const authContext = async (
  args: StandaloneServerContextFunctionArgument
): Promise<Auth> => {
  if (args.req.headers["authorization"]) {
    const payload = jwtDecode<Token>(
      args.req.headers["authorization"].replace("Bearer ", "")
    );

    return {
      id: payload.id,
      name: payload.name,
    };
  }

  return {};
};
