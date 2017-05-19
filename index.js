const execSync = require('child_process').execSync;

exports.isAray = function () {
  return execSync('whoami').toString().trim() === "ray";
}