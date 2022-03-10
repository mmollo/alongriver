import Site from "./Site.ts";
import Parcel from "./Parcel.ts";

export default class River {
  size: number = 10;

  sites: Map<number, Site> = new Map();
  parcels: Map<Parcel, number> = new Map();

  addSite(site: Site, position: number) {
    this.sites.set(position, site);
  }

  addParcel(parcel: Parcel, position: number) {
    this.parcels.set(parcel, position);
  }

  flow() {
    this.parcels.forEach((position, parcel) => {
      if (++position > this.size) {
        position = 1;
      }

      let site;
      if (site = this.sites.get(position)) {
        site.deliver(parcel);
        this.parcels.delete(parcel);
      } else {
        this.parcels.set(parcel, position);
      }
    });
  }

  deliver() {
    this.parcels.forEach((position, parcel) => {
    });
  }
}
