import open from "open";

export default async function openItem(src: string | undefined) {
  src && (await open(src));
}
