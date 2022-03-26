#!/usr/bin/env node

const { bold, yellowBright } = require("colorette");
const installer = require("../lib/installer");

function cli() {
  let packageName = process.argv[2];

  installer(packageName);

  installer(`@types/${packageName}`)
}

cli();
