import Parcel from "./Parcel.ts";
import Player from "./Player.ts";
import River from "./River.ts";

export default class World {
  rivers: River[];
  parcels: Parcel[];
  players: Player[];

  constructor() {
    this.parcels = [];
    this.players = [];
    this.rivers = [];
  }
}
