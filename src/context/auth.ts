import { mapSchema, getDirective, MapperKind } from "@graphql-tools/utils";
import { StandaloneServerContextFunctionArgument } from "@apollo/server/dist/esm/standalone";
import { defaultFieldResolver, GraphQLSchema } from "graphql";
import jwtDecode from "jwt-decode";
import { Auth, Context, Token } from "./types";
import { NotAuthorizedError } from "../errors/NotAuthorizedError";

export const authContext = async (
  args: StandaloneServerContextFunctionArgument
): Promise<Auth> => {
  if (args.req.headers["authorization"]) {
    const token = args.req.headers["authorization"].replace("Bearer ", "");
    const payload = jwtDecode<Token>(token);

    return {
      id: payload.id,
      name: payload.name,
      jwt: token,
    };
  }

  return {};
};

export const isAuthorised = (token: string, role: string) => {
  switch (role) {
    case "USER":
      return !!token;
    case "UNKNOWN":
      return true;
  }
  return false;
};

export const authDirective = () => {
  const typeDirectiveArgumentMaps: Record<string, any> = {};
  return {
    authDirectiveTransformer: (schema: GraphQLSchema) =>
      mapSchema(schema, {
        [MapperKind.TYPE]: (type) => {
          const authDirective = getDirective(schema, type, "auth")?.[0];
          if (authDirective) {
            typeDirectiveArgumentMaps[type.name] = authDirective;
          }
          return undefined;
        },
        [MapperKind.OBJECT_FIELD]: (fieldConfig, _fieldName, typeName) => {
          const authDirective =
            getDirective(schema, fieldConfig, "auth")?.[0] ??
            typeDirectiveArgumentMaps[typeName];
          if (authDirective) {
            const { requires } = authDirective;
            if (requires) {
              const { resolve = defaultFieldResolver } = fieldConfig;
              fieldConfig.resolve = function (
                source,
                args,
                context: Context,
                info
              ) {
                if (!isAuthorised(context.auth.jwt, requires)) {
                  throw new NotAuthorizedError();
                }
                return resolve(source, args, context, info);
              };
              return fieldConfig;
            }
          }
        },
      }),
  };
};
