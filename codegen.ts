import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "generated/joined.graphql",
  generates: {
    "generated/graphql.ts": {
      config: {
        contextType: "../src/context/types#Context",
      },
      presetConfig: {
        baseTypesPath: "../graphql.ts",
      },
      plugins: [
        {
          add: {
            content: "/* eslint-disable */",
          },
        },
        "typescript",
        "typescript-resolvers",
      ],
    },
  },
};

export default config;
