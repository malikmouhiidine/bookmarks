const getLists = require("./getLists");
const { prompt } = require("inquirer");
const writeLists = require("./writeLists");

async function createNewItem(listTitle) {
  let lists = getLists();
  const list = lists.find((list) => list.title === listTitle);

  const { newItemTitle } = await prompt({
    type: "input",
    name: "newItemTitle",
    message: "what's the title",
    validate: (input) => {
      if (!list.items.find((item) => item.title === input)) {
        return true;
      }

      return "The title is taken by another item";
    },
  });

  const { newItemSrc } = await prompt({
    type: "input",
    name: "newItemSrc",
    message: "what's the source of the item (e.g., URL, file path, executable)",
  });

  const newItem = {
    title: newItemTitle,
    src: newItemSrc,
  };

  lists.find((list) => list.title === listTitle).items.push(newItem);

  writeLists(lists);

  const { addaNewItem } = await prompt({
    type: "input",
    name: "addaNewItem",
    message: "add a new item in this list? (yn)",
  });

  if (addaNewItem === "y") {
    await createNewItem(listTitle);
  }
}

module.exports = createNewItem;
