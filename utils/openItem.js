const open = require("open");

async function openItem(src) {
  await open(src);
}

module.exports = openItem;
