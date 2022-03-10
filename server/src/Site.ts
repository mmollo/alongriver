import Player from "./Player.ts";
import PostBox from "./PostBox.ts";
import Parcel from "./Parcel.ts";

export default class Site {
  owner: Player | null = null;
  postboxes: PostBox[] = [new PostBox()];

  deliver(parcel: Parcel) {
    this.postboxes[0].add(parcel);
  }
}
