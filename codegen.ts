import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/generated/joined.graphql",
  generates: {
    "src/generated/graphql.ts": {
      config: {
        contextType: "../context#Context",
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
