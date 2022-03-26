const { yellowBright } = require("colorette");
const runner = require("./runner");
const findPackageManager = require("./utils/findPackageManager");

/**
 * Installs a package from NPM.
 * @param {string} packageName The package to install
 * @param {boolean?} isDevDependency Is Installing a dev dependency
 * @returns {boolean} returns if the process was successful
 */
module.exports = (packageName, isDevDependency = false) => {
  const pkgManager = findPackageManager();

    try {
      runner(
        `✅ Successfully Installed package: ${yellowBright(packageName)}`,
        pkgManager.manager,
        pkgManager.installCommand,
        packageName,
        isDevDependency && "-D"
      );
    } finally {
      return true;
    }
}

class Installer {
  constructor(pkgManager = findPackageManager()) {
    this.pkgManager = pkgManager;
  }

  installPkg(nameAndVersion) {
    
  }

  installPkgTypes(nameAndVersion) {}
}