import { Station, StationState } from './Station';
import { v4 as uuidv4 } from 'uuid';

const emptyStationState = { block: '', id: '', name: '' };

export class StationBuilder {
  public static EMPTY: Station = new StationBuilder().toStation();
  private name = '';
  private block = '';

  private uuid = uuidv4();
  private defaultStationState: StationState;

  constructor(defaultStationState: StationState = emptyStationState) {
    this.defaultStationState = defaultStationState;
  }

  stationName(value: string): this {
    this.name = value;
    return this;
  }

  blockName(value: string): this {
    this.block = value;
    return this;
  }

  toStation(): Station {
    return new Station(this.toState());
  }

  toState(): StationState {
    return {
      id: this.uuid,
      name: this.name,
      block: this.block,
    };
  }
}
