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
    if (this.isEmpty()) return Station.EMPTY;
    return this.items[0];
  }

  stationAfter(currentStation: Station) {
    const currentStationIndex = this.items.findIndex((value) => value.id === currentStation.id);

    const nextStationIndex = currentStationIndex + 1;

    return this.items[nextStationIndex];
  }
}
