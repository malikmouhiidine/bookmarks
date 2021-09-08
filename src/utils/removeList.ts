import getLists from "./getLists";
import { prompt } from "inquirer";
import writeLists from "./writeLists";

export default async function removeList() {
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
