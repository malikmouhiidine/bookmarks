import { readFileSync } from "jsonfile";

export interface Item {
  title: string;
  src: string;
}

export interface List {
  title: string;
  items: Array<Item>;
}

export default function getLists(): Array<List> {
  const file = process.cwd() + "/lists.json";
  try {
    const lists: Array<List> = readFileSync(file);
    return lists;
  } catch (err) {
    if (err.message.includes("ENOENT")) return [];
    else throw new Error(err.message);
  }
}
