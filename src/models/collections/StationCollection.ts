import { ItemCollection } from './ItemCollection';
import { Station, StationState } from '../Station';
import { StationBuilder } from '../StationBuilder';

export class StationCollection extends ItemCollection<Station> {
  get blockNames(): string[] {
    return this.items.map((stationState: StationState) => stationState.block);
  }

  get stationNames(): string[] {
    return this.items.map((station) => station.name);
  }

  first(): Station {
    if (this.isEmpty()) throw new Error('Collection is empty and has no first station');
    return this.items[0];
  }

  isLast(station: Station): boolean {
    if (this.isEmpty()) {
      throw new Error('Collection is empty and has no last station');
    }
    const lastStation = this.items.at(-1);

    return lastStation!.isEqualTo(station);
  }

  stationAfter(currentStation: Station) {
    if (this.isEmpty()) {
      throw new Error('stationAfter() call fails when StationCollection is empty');
    }
    if (this.isLast(currentStation)) {
      throw new Error('Failed trying to get the station after last station');
    }
    const currentStationIndex = this.getIndexOfStation(currentStation);
    const nextStationIndex = currentStationIndex + 1;

    return this.items[nextStationIndex];
  }

  private getIndexOfStation(currentStation: Station): number {
    return this.items.findIndex((value) => value.id === currentStation.id);
  }

  static createFromStationStateArray(stationStateList: StationState[]): StationCollection {
    const stations = stationStateList.map((stationState: StationState) =>
      new StationBuilder()
        .stationName(stationState.name)
        .blockName(stationState.block)
        .id(stationState.id)
        .toStation(),
    );
    return new StationCollection(stations);
  }

  remove(stationToRemove: Station): void {
    const indexOfStation = this.getIndexOfStation(stationToRemove);
    this.items.splice(indexOfStation, 1);
  }
}
