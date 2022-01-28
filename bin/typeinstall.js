#!/usr/bin/env node

import { bold, yellowBright } from "colorette";
import runner from "../lib/runner";

cli();

function cli() {
  let packageName = process.argv[2];

  runner(
    `✅ Successfully installed package: ${yellowBright(bold(packageName))}`,
    "npm",
    "i",
    packageName
  );

  runner(
    `🚀 Sucessfully installed types for package: ${yellowBright(
      bold(packageName)
    )}`,
    "npm",
    "i",
    "-D",
    `@types/${packageName}`
  );
}

