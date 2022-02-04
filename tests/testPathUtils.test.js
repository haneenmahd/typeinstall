const os = require("os");
const PathUtils = require("../lib/utils/PathUtils");

let pathUtils = new PathUtils();

// This var gives out cross-platform path
const testPath =
  os.platform() === "win32"
    ? `${os.userInfo().homedir}/some/folder`
    : os.platform() === "linux" ? "/home/of/my/folder"
    : "/Users/someone/code/javascript";

test("PathUtils, Call .create", () => {
  expect(pathUtils.create(testPath)).toEqual(new PathUtils().create(testPath));
});

test("PathUtils, Check if created array contains empty elements", () => {
  pathUtils.path.map((p) => {
    expect(p).not.toBe("");
  });
});

test("PathUtils, pop a path from the complete path", () => {
  expect(pathUtils.pop()).toEqual(new PathUtils().create(testPath).pop());
});

test("PathUtils, join splitted path as a string", () => {
  expect(pathUtils.join()).toBe(
    new PathUtils(new PathUtils().create(testPath)).join()
  );
});

test('PathUtils, Check the first element in .path', () => {
  expect(pathUtils.path[0]).toEqual(`${os.platform() !== "win32" && "/"}${new PathUtils().create(os.userInfo().homedir)[0]}`);
});