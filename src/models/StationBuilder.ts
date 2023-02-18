import { Station, StationState } from './Station';
import { v4 as uuidv4 } from 'uuid';
import { deepCopy } from '../state-management/helpers';

const emptyStationState = { block: '', id: '', name: '' };

export class StationBuilder {
  public static EMPTY_STATION: Station = new StationBuilder().toStation();

  private readonly state: StationState;

  constructor(defaultStationState: StationState = emptyStationState) {
    this.state = deepCopy(defaultStationState);
  }

  blockName(value: string): this {
    this.state.block = value;
    return this;
  }

  id(stationId: string): this {
    this.state.id = stationId;
    return this;
  }

  stationName(value: string): this {
    this.state.name = value;
    return this;
  }

  toStation(): Station {
    return new Station(this.toState());
  }

  toState(): StationState {
    if (this.state.id === '') {
      this.state.id = uuidv4();
    }
    return this.state;
  }
}
