import getLists from "./getLists";
import { prompt } from "inquirer";
import writeLists from "./writeLists";

export default async function removeItem(listTitle: string) {
  let lists = getLists();
  const listIndex = lists.findIndex((list) => list.title === listTitle);

  const { choosedItemTitle } = await prompt({
    type: "list",
    name: "choosedItemTitle",
    message: "choose an item to remove",
    choices: lists[listIndex].items.map((item) => item.title),
    loop: false,
  });

  lists[listIndex].items.splice(
    lists[listIndex].items.findIndex((item) => item.title === choosedItemTitle),
    1
  );

  writeLists(lists);
}
