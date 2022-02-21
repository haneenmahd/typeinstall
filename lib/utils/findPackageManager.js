const fs = require("fs");
const path = require("path");

const findPackageManager = () => {
    const currentPath = path.resolve(process.cwd(), 'yarn.lock');

    if (!fs.existsSync(currentPath)) {
        return "npm";
    } else {
        return "yarn";
    }
}

module.exports = findPackageManager;