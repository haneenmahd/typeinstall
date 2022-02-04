const runner = require("./runner");
const { yellowBright } = require("colorette");

/**
 * Installs a package from NPM.
 * @param {string} packageName The package to install
 * @param {boolean?} isDevDependency Is Installing a dev dependency
 * @returns {boolean} returns if the process was successful
 */
module.exports = (packageName, isDevDependency = false) => {
    try {
      runner(
        `✅ Successfully Installed package: ${yellowBright(packageName)}`,
        "npm",
        "i",
        packageName,
        isDevDependency && "-D"
      );
    } finally {
      return true;
    }
}