import { ItemCollection } from './ItemCollection';
import { Station, StationState } from '../Station';

export class StationCollection extends ItemCollection<Station> {
  get blockNames(): string[] {
    return this.items.map((stationState: StationState) => stationState.block);
  }
  static createFromStationStateArray(stationStateList: StationState[]): StationCollection {
    const stations = stationStateList.map(
      (stationState: StationState) => new Station(stationState),
    );
    return new StationCollection(stations);
  }
  get stationNames(): string[] {
    return this.items.map((station) => station.name);
  }
}
