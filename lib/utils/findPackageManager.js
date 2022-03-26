const fs = require("fs");
const path = require("path");

/**
 * Checks and returns the package maanger used in the project
 * 
 * @returns {{
 *  manager: string;
 *  installCommand: string;
 * }}
 */
const findPackageManager = () => {
    const currentPath = path.resolve(process.cwd(), 'yarn.lock');

    if (!fs.existsSync(currentPath)) {
        return {
            manager: "npm",
            installCommand: "install"
        };
    } else {
        return {
          manager: "yarn",
          installCommand: "add"
        };
    }
}

module.exports = findPackageManager;