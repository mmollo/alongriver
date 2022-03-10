import Item from "./Item.ts";

export default class Parcel {
  items: Item[] = [];

  add(item: Item) {
    this.items.push(item);
  }
}
