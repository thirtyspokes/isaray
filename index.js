const execSync = require('child_process').execSync;

module.exports = function () {
  return execSync('whoami').toString().trim() === "ray";
}