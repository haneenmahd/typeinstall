const os = require("os");
const PathUtils = require("../lib/utils/PathUtils");

let pathUtils = new PathUtils();

// This var gives out cross-platform path
const testPath =
  os.platform() === "win32"
    ? `${os.userInfo().homedir}/some/folder`
    : "/Users/someone/code/javascript";

test("PathUtils, Call .create", () => {
  expect(pathUtils.create(testPath)).toEqual(["Users", "someone", "code", "javascript"]);
});

test("PathUtils, Check if created array contains empty elements", () => {
  pathUtils.path.map((p) => {
    expect(p).not.toBe("");
  });
});

test("PathUtils, pop a path from the complete path", () => {
  expect(pathUtils.pop()).toEqual(["Users", "someone", "code"]);
});

test("PathUtils, join splitted path as a string", () => {
  expect(pathUtils.join()).toBe("/Users/someone/code");
});

test('PathUtils, Check the first element in .path', () => {
  expect(pathUtils.path[0]).toEqual(`${os.platform() !== "win32" && "/"}${new PathUtils().create(os.userInfo().homedir)[0]}`);
});

