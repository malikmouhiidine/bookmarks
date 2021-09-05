const { writeFileSync } = require("jsonfile");

function writeLists(lists) {
  const file = process.cwd() + "/lists.json";
  writeFileSync(file, lists);
}

module.exports = writeLists;
