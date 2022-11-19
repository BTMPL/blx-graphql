import { StandaloneServerContextFunctionArgument } from "@apollo/server/dist/esm/standalone";

import { authContext, Auth } from "./auth";

export interface Context {
  auth: Auth;
}

export const context = async (
  args: StandaloneServerContextFunctionArgument
) => {
  const auth = await authContext(args);

  return {
    auth,
  };
};
