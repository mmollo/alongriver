import Parcel from "./Parcel.ts";

export default class PostBox {
  parcels: Parcel[] = [];

  add(parcel: Parcel) {
    this.parcels.push(parcel);
  }
}
