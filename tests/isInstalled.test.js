/**
 * Before running some scripts in here, install these packages using the `install` script from the command line.
 */
const isInstalled = require("../lib/utils/isInstalled");

test("Check if the packages was installed", () => {
  expect(isInstalled("@types/node")).toBe(true);
  expect(isInstalled("play-sound")).toBe(true);

  expect(isInstalled("\\asaaasaasaaasasaa\\a\\sa")).toBe(false); // check if this failes
});
