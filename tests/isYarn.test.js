const findPackageManager = require("../lib/utils/findPackageManager");

test("Check package manager", () => {
  expect(findPackageManager()).toEqual("npm");
});
