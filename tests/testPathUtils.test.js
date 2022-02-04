const PathUtils = require("../lib/utils/PathUtils");

let pathUtils = new PathUtils();

test("PathUtils, Call .create", () => {
  expect(pathUtils.create("/Users/someone/code/javascript")).toEqual(["Users", "someone", "code", "javascript"]);
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