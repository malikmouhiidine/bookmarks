const backup = require("./utils/lists_backup");
const intro = require("./utils/intro");
const showLists = require("./utils/showLists");

const main = async () => {
  backup();

  intro();

  await showLists();
};

main();
