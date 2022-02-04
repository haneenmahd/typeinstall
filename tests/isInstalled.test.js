const install = require("../lib/install");
const isInstalled = require("../lib/utils/isInstalled");

test('Check if the packages was installed', () => {
  try {
    install("@types/node", true);
  } finally {
    expect(isInstalled("@types/node")).toBe(true);
  }

  try {
    install("express", false);
  } finally {
    expect(isInstalled("express")).toBe(true);
  }
  
  expect(isInstalled("\\asaa\a\saasaa\as\asa\a\\a\\sa")).toBe(false); // check if this failes
});
