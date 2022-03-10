import Inventory from "./Inventory.ts";

export default class Player {
  name: string;
  inventory: Inventory;

  constructor(name: string = "Player") {
    this.name = name;
    this.inventory = new Inventory();
  }
}
