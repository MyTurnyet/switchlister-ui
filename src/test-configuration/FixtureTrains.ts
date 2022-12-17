import { Train, TrainState } from '../models/Train';
import { v4 as uuidv4 } from 'uuid';
import { Station, StationState } from '../models/Station';
import { Industry, IndustryState } from '../models/Industry';
import { boxcarCP1234State, hopperBCAX5State } from './FixtureRollingStock';
import { CarType, RollingStockState } from '../models/RollingStock';

export const station0State: StationState = createStationState('station0');
export const station1State: StationState = createStationState('station1');
export const station2State: StationState = createStationState('station2');
export const station3State: StationState = createStationState('station3');
export const station4State: StationState = createStationState('station4');

export const industry1State: IndustryState = createIndustryState(station1State, 'Industry 1', [
  CarType.XM,
  CarType.HT,
]);
export const industryXmHtNoCars = new Industry(industry1State);
export const industry2State: IndustryState = createIndustryState(station1State, 'Industry 2', [
  CarType.XM,
]);
export const industryXmNoCars = new Industry(industry2State);
export const industry3State: IndustryState = createIndustryState(station1State, 'Industry 3', [
  CarType.HT,
]);

export const industryHtNoCars = new Industry(industry3State);
export const industry5State: IndustryState = createIndustryState(station2State, 'Industry 5', [
  CarType.XM,
  CarType.XMO,
]);
export const industryXmXmoNoCars = new Industry(industry5State);
export const industry6State: IndustryState = createIndustryState(station3State, 'Industry 6', [
  CarType.All,
]);
export const industryAllNoCars = new Industry(industry6State);
export const industry7State: IndustryState = createIndustryState(
  station4State,
  'Industry 7',
  [CarType.XM, CarType.HT],
  [boxcarCP1234State, hopperBCAX5State],
  3,
);

export const industryXmHtTwoCars = new Industry(industry7State);
export const industry4State: IndustryState = createIndustryState(station4State, 'Industry 4', [
  CarType.XMO,
]);
export const industryXmoNoCars = new Industry(industry4State);

export const station1 = new Station(station1State);
export const station2 = new Station(station2State);

export const station3 = new Station(station3State);
export const station4 = new Station(station4State);

export const train1State: TrainState = createTrainState('Local Express', [
  station1State,
  station2State,
]);
export const train2State: TrainState = createTrainState('Another Train', [
  station3State,
  station2State,
  station4State,
]);

export const train1 = new Train(train1State);

export const train2 = new Train(train2State);
function createIndustryState(
  stationState: StationState,
  name: string,
  servicedCarTypes: string[] = [],
  placedCars: RollingStockState[] = [],
  maxCarCount = 1,
): IndustryState {
  return {
    id: uuidv4(),
    maxCarCount,
    name,
    stationId: stationState.id,
    placedCars,
    servicedCarTypes,
  };
}

export function createStationState(name: string): StationState {
  return {
    id: uuidv4(),
    name,
  };
}

function createTrainState(name: string, stations: StationState[]): TrainState {
  return {
    id: uuidv4(),
    name,
    stations,
  };
}
