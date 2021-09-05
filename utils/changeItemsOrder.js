const writeLists = require("./writeLists");
const getLists = require("./getLists");
const { prompt } = require("inquirer");

async function changeItemsOrder(listIndex) {
  let lists = getLists();

  const { itemTitleToChangeOrder } = await prompt({
    type: "list",
    name: "itemTitleToChangeOrder",
    message: "what's the item to change it's order",
    choices: lists[listIndex].items.map((item) => item.title),
    loop: false,
  });

  const { itemTitleToPutChangedBefore } = await prompt({
    type: "list",
    name: "itemTitleToPutChangedBefore",
    message: "before what item you want to put it?",
    choices: lists[listIndex].items.map((item) => item.title),
    loop: false,
  });

  const from = lists[listIndex].items.findIndex(
    (item) => item.title === itemTitleToChangeOrder
  );
  const to = lists[listIndex].items.findIndex(
    (item) => item.title === itemTitleToPutChangedBefore
  );

  const list = lists[listIndex].items.splice(from, 1);
  lists[listIndex].items.splice(to, 0, list[0]);

  writeLists(lists);
}

module.exports = changeItemsOrder;
