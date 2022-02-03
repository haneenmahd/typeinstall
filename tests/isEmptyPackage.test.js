const fs = require("fs");
const path = require("path");

/**
 * Checks if the package was empty or not
 */
const isEmptyPackage = () => {
    const packagePath = path.resolve(process.cwd(), "package.json");
    const fileData = JSON.parse(
      fs.readFileSync(packagePath, { encoding: "utf-8" })
    );

    for (let dep in fileData.dependencies) {
      if (dep.startsWith("@types") /* Ignore node types that are used in some cases */) {
        if (dep.startsWith("@types/node")) {
          break;
        } 
        
        return false;
      }
    }

    for (let dep in fileData.devDependencies) {
      if (dep.startsWith("@types")) {
        return true;
      }
    }

    return true;
}

test('Check if the package dependencies is empty', () => {
  expect(isEmptyPackage()).toBe(true);
});