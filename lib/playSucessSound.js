const path = require("path");

const player = require("play-sound")();

module.exports = () => {
    const soundPath = path.resolve(__dirname, "./data/Blow.mp3");

    if (!process.env.CI) {
      player.play(soundPath, (err) => {
        if (err) throw console.log("Can't play install success sound", err);
      });
    }
};