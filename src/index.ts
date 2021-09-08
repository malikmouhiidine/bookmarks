import backup from "./utils/lists_backup";
import intro from "./utils/intro";
import showLists from "./utils/showLists";

const main = async () => {
  backup();

  intro();

  await showLists();
};

main();
