import { ItemCollection } from './ItemCollection';
import { Station, StationState } from '../Station';
import { Industry } from '../Industry';

export class StationCollection extends ItemCollection<Station> {
  static createFromStationStateArray(stationStateList: StationState[]): StationCollection {
    const stations = stationStateList.map(
      (stationState: StationState) => new Station(stationState),
    );
    return new StationCollection(stations);
  }
  get stationNames(): string[] {
    return this.items.map((station) => station.name);
  }

  findIndustry(industryId: string): Industry {
    let foundIndustry: Industry = Industry.EMPTY;
    this.items.forEach((station: Station) => {
      const industryWithId = station.getIndustryWithId(industryId);
      if (industryWithId !== Industry.EMPTY) {
        foundIndustry = industryWithId;
        return;
      }
    });
    return foundIndustry;
  }
}
