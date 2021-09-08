import { prompt } from "inquirer";
import getLists from "./getLists";
import writeLists from "./writeLists";

export default async function editList() {
  let lists = getLists();

  const { choosedListTitle } = await prompt({
    type: "list",
    name: "choosedListTitle",
    message: "choose a list to edit",
    choices: lists.map((list) => list.title),
    loop: false,
  });

  let list = lists.find((list) => list.title === choosedListTitle);

  const { newListTitle } = await prompt({
    type: "input",
    name: "newListTitle",
    message: "title",
    default: list?.title,
  });

  if (list) list.title = newListTitle;

  writeLists(lists);
}
