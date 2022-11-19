const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs } = require("@graphql-tools/merge");
const { print } = require("graphql");
const fs = require("fs");

const loadedFiles = loadFilesSync(`${__dirname}/../src/features/**/*.graphql`);
const typeDefs = mergeTypeDefs(loadedFiles);
const printedTypeDefs = print(typeDefs);
fs.writeFileSync(
  `${__dirname}/../src/generated/joined.graphql`,
  printedTypeDefs
);
