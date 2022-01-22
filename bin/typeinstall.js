import { bold, yellowBright } from "colorette";
import cp from "child_process";

cli();

function cli() {
  let packageName = process.argv[2];

  installer(`✅ Successfully installed package: ${yellowBright(bold(packageName))}`, "npm", "i", packageName);

  installer(`🚀 Sucessfully installed types for package: ${yellowBright(bold(packageName))}`, "npm", "i", "-D", `@types/${packageName}`);
}

/**
 * Runs a command as a child process
 * @param {string} command The command to run
 * @param {string[]} args Arguments to pass
 * @returns {string} output of the command
 */
function installer(message, command, ...args) {
  let runner = cp.spawn(command, args);

  runner.stdout.on("data", (data) => {
    console.log(data.toString());
  });

  runner.stderr.on("error", (e) => {
    console.log(e);
    process.exit(1);
  });

  runner.on("exit", () => {
    console.log(message);
  });
}
