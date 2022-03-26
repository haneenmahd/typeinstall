#!/usr/bin/env node

const Installer = require("../lib/Installer");

function cli() {
  let packageName = process.argv[2];

  Installer.installPkg(packageName)

  Installer.installPkgTypes(packageName)
}

cli();
