const openItem = require("./openItem");
const createNewItem = require("./createNewItem");
const removeItem = require("./removeItem");
const { prompt, Separator } = require("inquirer");
const getLists = require("./getLists");
const changeItemsOrder = require("./changeItemsOrder");

async function showList(listIndex) {
  const lists = getLists();
  const { items } = lists[listIndex];

  const { choosedItemTitle } = await prompt({
    type: "list",
    name: "choosedItemTitle",
    message: "choose an item to open",
    choices: [
      ...items.map((item) => item.title),
      new Separator(),
      "add a new item",
      "remove an item",
      "change order",
      "return",
    ],
    loop: false,
  });

  if (choosedItemTitle === "add a new item") {
    await createNewItem(lists[listIndex].title);
    await showList(listIndex);
  } else if (choosedItemTitle === "remove an item") {
    await removeItem(lists[listIndex].title);
    await showList(listIndex);
  } else if (choosedItemTitle === "change order") {
    await changeItemsOrder(listIndex);
    await showList(listIndex);
  } else if (choosedItemTitle === "return") {
    return;
  } else {
    const choosedItem = items.find((item) => item.title === choosedItemTitle);
    await openItem(choosedItem.src);
    await showList(listIndex);
  }
}

module.exports = showList;
