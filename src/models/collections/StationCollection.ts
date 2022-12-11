import { ItemCollection } from './ItemCollection';
import { Station, StationState } from '../Station';

export class StationCollection extends ItemCollection<Station> {
  static createFromStationStateArray(stationStateList: StationState[]): StationCollection {
    const stations = stationStateList.map((stationState) => new Station(stationState));
    return new StationCollection(stations);
  }
}