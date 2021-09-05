const { prompt } = require("inquirer");
const getLists = require("./getLists");
const writeLists = require("./writeLists");

async function changeListsOrder() {
  let lists = getLists();

  const { listTitleToChangeOrder } = await prompt({
    type: "list",
    name: "listTitleToChangeOrder",
    message: "what's the list to change it's order",
    choices: lists.map((list) => list.title),
    loop: false,
  });

  const { listTitleToPutChangedBefore } = await prompt({
    type: "list",
    name: "listTitleToPutChangedBefore",
    message: "before what list you want to put it?",
    choices: lists.map((list) => list.title),
    loop: false,
  });

  const from = lists.findIndex((list) => list.title === listTitleToChangeOrder);
  const to = lists.findIndex(
    (list) => list.title === listTitleToPutChangedBefore
  );

  const list = lists.splice(from, 1);
  lists.splice(to, 0, list[0]);

  writeLists(lists);
}

module.exports = changeListsOrder;
