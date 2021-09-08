import getLists from "./getLists";
import createNewItem from "./createNewItem";
import { prompt } from "inquirer";
import writeLists from "./writeLists";

export default async function createNewList() {
  let lists = getLists();

  const { newListTitle } = await prompt({
    type: "input",
    name: "newListTitle",
    message: "choose a title for the new list",
    validate: (input) => {
      if (!lists.find((list) => list.title === input)) {
        return true;
      }

      return "The title is taken by another list";
    },
  });

  const newList = {
    title: newListTitle,
    items: [],
  };

  lists.push(newList);

  writeLists(lists);

  const { addaNewItem } = await prompt({
    type: "input",
    name: "addaNewItem",
    message: "add a new item in this list? (yn)",
  });

  if (addaNewItem === "y") {
    await createNewItem(newList.title);
  }

  return lists.length - 1;
}
