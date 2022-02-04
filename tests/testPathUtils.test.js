const PathUtils = require("../lib/utils/PathUtils");

let pathUtils = new PathUtils();

test("PathUtils, Call .create", () => {
  expect(pathUtils.create("/Users/someone/code/javascript").length).toBe(4);
});

test("PathUtils, Check if created array contains empty elements", () => {
  pathUtils.path.map((p) => {
    expect(p).not.toBe("");
  });
});

test("PathUtils, pop a path from the complete path", () => {
  expect(pathUtils.pop().length).toBe(3);
});