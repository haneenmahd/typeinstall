import cp from "child_process";

/**
 * Runs a command as a child process
 * @param {string} command The command to run
 * @param {string[]} args Arguments to pass
 * @returns {string} output of the command
 */
export default function runner(message, command, ...args) {
  let runner = cp.spawn(command, args);

  runner.stdout.on("data", (data) => {
    let dataInString = data.toString();

    console.log(dataInString);

    return dataInString;
  });

  runner.stderr.on("error", (e) => {
    console.log(e);
    process.exit(1);
  });

  runner.on("exit", () => {
    console.log(message);
  });
}
