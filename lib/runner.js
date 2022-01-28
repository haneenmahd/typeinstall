const cp = require("child_process");

/**
 * Runs a command as a child process
 * @param {string} command The command to run
 * @param {string[]} args Arguments to pass
 * @returns {string} output of the command
 */
module.exports = function runner(message, command, ...args) {
  let runner = cp.spawn(command, args);

  runner.stdout.on("data", (data) => {
    let dataInString = data.toString();

    console.log(dataInString);
  });

  runner.stderr.on("error", (e) => {
    console.log(e);
    process.exit(1);
  });

  runner.on("exit", () => {
    console.log(message);
  });
}
