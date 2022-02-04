const isInstalled = require("../lib/utils/isInstalled");

test('Check if the packages was installed', () => {
  expect(isInstalled("@types/node")).toBe(true);
  expect(isInstalled("jest")).toBe(true);
  expect(isInstalled("play-sound")).toBe(true);
  expect(isInstalled("\\asaa\a\saasaa\as\asa\a\\a\\sa")).toBe(false); // check if this failes
});
