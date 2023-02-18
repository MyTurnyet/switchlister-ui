import { Station, StationState } from '../models/Station';
import { v4 as uuidv4 } from 'uuid';

export const eastBlock = 'EAST';
export const echoLakeBlock = 'ECHO LAKE';
export const westBlock = 'WEST';
export const station0State: StationState = createStationState('station0', eastBlock);
export const station1State: StationState = createStationState('station1', eastBlock);
export const station2State: StationState = createStationState('station2', echoLakeBlock);
export const station3State: StationState = createStationState('station3', westBlock);
export const station4State: StationState = createStationState('station4', westBlock);
export const station1 = new Station(station1State);
export const station2 = new Station(station2State);
export const station3 = new Station(station3State);
export const station4 = new Station(station4State);

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

export function createStationState(name: string, block: string): StationState {
  return {
    id: uuidv4(),
    name,
    block,
  };
}
