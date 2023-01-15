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

  first(): Station {
    if (this.isEmpty()) throw new Error('Collection is empty and has no first station');
    return this.items[0];
  }

  stationAfter(currentStation: Station) {
    if (this.isEmpty()) {
      throw new Error('stationAfter() call fails when StationCollection is empty');
    }
    if (this.isLast(currentStation)) {
      throw new Error('Failed trying to get the station after last station');
    }
    const currentStationIndex = this.items.findIndex((value) => value.id === currentStation.id);

    const nextStationIndex = currentStationIndex + 1;

    return this.items[nextStationIndex];
  }

  isLast(station: Station) {
    if (this.isEmpty()) {
      throw new Error('Collection is empty and has no last station');
    }
    const lastStation = this.items[this.items.length - 1];
    return lastStation === station;
  }
}
