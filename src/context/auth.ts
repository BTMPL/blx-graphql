import { mapSchema, getDirective, MapperKind } from "@graphql-tools/utils";
import { StandaloneServerContextFunctionArgument } from "@apollo/server/dist/esm/standalone";
import { defaultFieldResolver, GraphQLSchema } from "graphql";
import jwtDecode from "jwt-decode";
import { Context } from ".";

interface Token {
  id: string;
  name: string;
}

export interface Auth {
  id?: string;
  name?: string;
  jwt?: string;
}

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

export const authDirective = (
  directiveName: string,
  getUserFn: (token: string) => { isAuthorised: (role: string) => boolean }
) => {
  const typeDirectiveArgumentMaps: Record<string, any> = {};
  return {
    authDirectiveTypeDefs: `directive @${directiveName}(
      requires: Role = USER,
    ) on OBJECT | FIELD_DEFINITION
 
    enum Role {
      USER
      UNKNOWN
    }`,
    authDirectiveTransformer: (schema: GraphQLSchema) =>
      mapSchema(schema, {
        [MapperKind.TYPE]: (type) => {
          const authDirective = getDirective(schema, type, directiveName)?.[0];
          if (authDirective) {
            typeDirectiveArgumentMaps[type.name] = authDirective;
          }
          return undefined;
        },
        [MapperKind.OBJECT_FIELD]: (fieldConfig, _fieldName, typeName) => {
          const authDirective =
            getDirective(schema, fieldConfig, directiveName)?.[0] ??
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
                const user = getUserFn(context.auth.jwt);
                if (!user.isAuthorised(requires)) {
                  throw new Error("Not authorized");
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

export const getUser = (token: string) => {
  return {
    isAuthorised: (role: string) => {
      switch (role) {
        case "USER":
          return !!token;
        case "UNKNOWN":
          return true;
      }
      return false;
    },
  };
};
