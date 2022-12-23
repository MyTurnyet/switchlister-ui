import { ItemCollection } from './ItemCollection';
import { Station, StationState } from '../Station';

export class StationCollection extends ItemCollection<Station> {
  get blockNames(): string[] {
    const blockNames: string[] = this.items.map((stationState: StationState) => stationState.block);
    return blockNames;
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
