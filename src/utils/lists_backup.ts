import { writeFileSync } from "jsonfile";
import getLists from "./getLists";

export default function backup() {
  const lists = getLists();
  const file = process.cwd() + "/lists_backup.json";
  writeFileSync(file, lists);
}
