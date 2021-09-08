import { prompt } from "inquirer";
import getLists from "./getLists";
import writeLists from "./writeLists";

export default async function editItem(listTitle: string) {
  let lists = getLists();
  const listIndex = lists.findIndex((list) => list.title === listTitle);

  const { choosedItemTitle } = await prompt({
    type: "list",
    name: "choosedItemTitle",
    message: "choose an item to edit",
    choices: lists[listIndex].items.map((item) => item.title),
    loop: false,
  });

  let item = lists[listIndex].items.find(
    (item) => item.title === choosedItemTitle
  );

  const { newItemTitle } = await prompt({
    type: "input",
    name: "newItemTitle",
    message: "title",
    default: item?.title,
  });

  const { newItemSrc } = await prompt({
    type: "input",
    name: "newItemSrc",
    message: "src",
    default: item?.src,
  });

  if (item) {
    item.title = newItemTitle;
    item.src = newItemSrc;
  }

  writeLists(lists);
}
