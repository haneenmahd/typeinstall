const fs = require("fs");
const path = require("path");

/**
 * Checks and returns the package maanger used in the project
 * 
 * @returns {"yarn" | "npm"}
 */
const findPackageManager = () => {
    const currentPath = path.resolve(process.cwd(), 'yarn.lock');

    if (!fs.existsSync(currentPath)) {
        return "npm";
    } else {
        return "yarn";
    }
}

module.exports = findPackageManager;