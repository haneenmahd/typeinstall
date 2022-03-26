const path = require("path");
const fs = require("fs");

/**
 * Checks if a package was installed in the package.json file
 * @param {string} packageName The name of the package to check 
 * @returns {boolean} Returns if it exists or not
 */
module.exports = (packageName) => {
  let packagePath = path.resolve(process.cwd(), "package.json");

  /** @type {string[]} */
  let packageDeps = JSON.parse(
    fs.readFileSync(packagePath, "utf-8")
  ).dependencies;
  
  /** @type {string[]} */
  let packageDevDeps = JSON.parse(
    fs.readFileSync(packagePath, "utf-8")
  ).devDependencies;

  for (const dep in packageDeps) {
    if (dep === packageName) {
      return true;
    }
  }

  for (const dep in packageDevDeps) {
    if (dep === packageName) {
      return true;
    }
  }

  return false;
}