const { readFileSync } = require("jsonfile");

function getLists() {
  const file = process.cwd() + "/lists.json";
  try {
    const lists = readFileSync(file);
    return lists;
  } catch (err) {
    if (err.message.includes("ENOENT")) return [];
    else throw new Error(err.message);
  }
}

module.exports = getLists;
