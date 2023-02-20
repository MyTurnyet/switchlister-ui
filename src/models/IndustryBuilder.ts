import { Industry, IndustryState } from './Industry';
import { deepCopy } from '../state-management/helpers';
import { v4 as uuidv4 } from 'uuid';
import { StationState } from './Station';
import { RollingStockState } from './RollingStock';

const emptyIndustry: IndustryState = {
  id: '',
  maxCarCount: 1,
  name: '',
  placedCars: [],
  servicedCarTypes: [],
  stationId: '',
};

export class IndustryBuilder {
  public static EMPTY_INDUSTRY = new IndustryBuilder().toIndustry();
  private readonly state: IndustryState;

  constructor(industryState: IndustryState = emptyIndustry) {
    this.state = deepCopy(industryState);
  }

  toIndustry(): Industry {
    return new Industry(this.toState());
  }

  toState(): IndustryState {
    if (this.state.id === '') {
      this.state.id = uuidv4();
    }
    return this.state;
  }

  stationState(stationState: StationState): this {
    this.state.stationId = stationState.id;
    return this;
  }

  name(name: string): this {
    this.state.name = name;
    return this;
  }

  servicedCarTypes(...carTypes: string[]): this {
    this.state.servicedCarTypes = carTypes;
    return this;
  }

  placedCars(...placedCars: RollingStockState[]): this {
    this.state.placedCars = placedCars;
    return this;
  }

  maxCarCount(maxCars: number): this {
    this.state.maxCarCount = maxCars;
    return this;
  }
}
