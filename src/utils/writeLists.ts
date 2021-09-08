import { writeFileSync } from "jsonfile";
import { List } from "./getLists";

export default function writeLists(lists: Array<List>) {
  const file = process.cwd() + "/lists.json";
  writeFileSync(file, lists);
}
