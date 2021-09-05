const showLists = require("./showLists");
const { writeFileSync } = require("jsonfile");
const getLists = require("./getLists");
const { prompt } = require("inquirer");
const writeLists = require("./writeLists");

async function removeList() {
  let lists = getLists();

  const { choosedListTitle } = await prompt({
    type: "list",
    name: "choosedListTitle",
    message: "choose a list to remove",
    choices: lists.map((list) => list.title),
    loop: false,
  });

  lists.splice(
    lists.findIndex((list) => list.title === choosedListTitle),
    1
  );

  writeLists(lists);
}

module.exports = removeList;
