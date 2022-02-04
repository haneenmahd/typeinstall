/**
 * This file should be ran from the command line in-order to run isInstalled test
 */
const install = require("../lib/install");

/**
 * The main install function 👻
 */
const main = () => {
    install("@types/node", true);

    install("play-sound", false);
}

main();