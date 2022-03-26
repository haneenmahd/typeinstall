const findPackageManager = require("../lib/utils/findPackageManager");

test("Check package manager", () => {
  expect(findPackageManager().manager).toEqual("npm");
  expect(findPackageManager().installCommand).toEqual("install");
});
