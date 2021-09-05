const { writeFileSync } = require("jsonfile");
const getLists = require("./getLists");

function backup() {
  const lists = getLists();
  const file = process.cwd() + "/lists_backup.json";
  writeFileSync(file, lists);
}

module.exports = backup;
