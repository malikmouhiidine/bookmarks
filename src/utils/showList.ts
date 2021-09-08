import openItem from "./openItem";
import createNewItem from "./createNewItem";
import removeItem from "./removeItem";
import { prompt, Separator } from "inquirer";
import getLists from "./getLists";
import changeItemsOrder from "./changeItemsOrder";

export default async function showList(listIndex: number) {
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
    await openItem(choosedItem && choosedItem.src);
    await showList(listIndex);
  }
}
