const { spawn, exec } = require("child_process");
const playSuccessSound = require("../lib/playSucessSound");

/**
 * Runs a command as a child process
 * @param {string} command The command to run
 * @param {string[]} args Arguments to pass
 * @returns {string} output of the command
 */
module.exports = async (message, command, ...args) => {
  let runner = spawn(command, args);

  runner.stderr.on("error", (e) => {
    console.log(e);
    process.exit(1);
  });

  runner.on("exit", () => {
    console.log(message);
    playSuccessSound();
  });
}
