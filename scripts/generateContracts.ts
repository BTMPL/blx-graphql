// import {execSync} from 'child_process';
// import {Services} from './types/services.interface';

import fs from "fs";
import { execSync } from "child_process";
import path from "path";

function trimGeneratedContract(contractName: string, keep: string[] = []) {
  fs.readdirSync(`generated/contracts/${contractName}`).forEach((object) => {
    if (!keep.includes(object)) {
      fs.rmSync(`generated/contracts/${contractName}/${object}`, {
        recursive: true,
      });
    }
  });
}

(async function (): Promise<void> {
  try {
    fs.rmSync("generated/contracts", {
      recursive: true,
    });
  } catch {}
  fs.mkdirSync("generated/contracts");

  fs.readdirSync("contracts").forEach((dir) => {
    execSync(
      `docker run --rm -v ${path.dirname(
        __dirname
      )}:/local openapitools/openapi-generator-cli generate -i /local/contracts/${dir}/openapi.yaml -g typescript-angular -o /local/generated/contracts/${dir} --additional-properties=enumPropertyNaming=UPPERCASE`
    );
    // trim everything but models
    trimGeneratedContract(dir, ["model"]);
  });
})();
