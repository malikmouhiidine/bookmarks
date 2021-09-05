const getLists = require("./getLists");
const showList = require("./showList");
const createNewList = require("./createNewList");
const removeList = require("./removeList");
const { prompt, Separator } = require("inquirer");
const changeListsOrder = require("./changeListsOrder");

async function showLists() {
  const lists = getLists();

  const { choosedListTitle } = await prompt({
    type: "list",
    name: "choosedListTitle",
    message: "choose a list to navigate through it",
    choices: [
      ...lists.map((list) => list.title),
      new Separator(),
      "add a new list",
      "remove a list",
      "change order",
    ],
    loop: false,
  });

  const choosedListIndex = lists.findIndex(
    (list) => list.title === choosedListTitle
  );

  if (choosedListTitle === "add a new list") {
    await createNewList();
  } else if (choosedListTitle === "remove a list") {
    await removeList();
  } else if (choosedListTitle === "change order") {
    await changeListsOrder();
  } else {
    await showList(choosedListIndex);
  }
  await showLists();
}

module.exports = showLists;
