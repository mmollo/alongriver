import Server from "./src/Server.ts";
import World from "./src/World.ts";
import Player from "./src/Player.ts";
import Site from "./src/Site.ts";
import River from "./src/River.ts";
import Letter from "./src/Letter.ts";
import Parcel from "./src/Parcel.ts";

let player = new Player();
player.name = "Bob";

let site = new Site();
site.owner = player;

let river = new River();
river.addSite(site, 6);

let world = new World();
world.rivers.push(river);
world.players.push(player);

let letter = new Letter();
letter.contents = "Hello world";

let parcel = new Parcel();
parcel.add(letter);

river.addParcel(parcel, 2);

setInterval((_) => {
  river.flow();
  console.log(river);
  console.log(site);
}, 100);
