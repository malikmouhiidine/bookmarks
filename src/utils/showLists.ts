import getLists from "./getLists";
import showList from "./showList";
import createNewList from "./createNewList";
import removeList from "./removeList";
import editList from "./editList";
import changeListsOrder from "./changeListsOrder";
import { prompt, Separator } from "inquirer";

export default async function showLists() {
  const lists = getLists();

  const { choosedListTitle } = await prompt({
    type: "list",
    name: "choosedListTitle",
    message: "choose a list to navigate through it",
    choices: [
      ...lists.map((list) => list.title),
      new Separator(),
      "add a new list",
      "edit a list",
      "remove a list",
      "change order",
    ],
    loop: false,
  });

  const choosedListIndex = lists.findIndex(
    (list) => list.title === choosedListTitle
  );

  if (choosedListTitle === "add a new list") {
    const listIndex = await createNewList();
    await showList(listIndex);
    await showLists();
  } else if (choosedListTitle === "edit a list") {
    await editList();
    await showLists();
  } else if (choosedListTitle === "remove a list") {
    await removeList();
    await showLists();
  } else if (choosedListTitle === "change order") {
    await changeListsOrder();
    await showLists();
  } else {
    await showList(choosedListIndex);
    await showLists();
  }
}
