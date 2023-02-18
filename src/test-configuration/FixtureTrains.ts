import { Train, TrainState } from '../models/Train';
import { v4 as uuidv4 } from 'uuid';
import { StationState } from '../models/Station';
import { Industry, IndustryState } from '../models/Industry';
import { boxcarCP1234State, hopperBCAX5State } from './FixtureRollingStock';
import { CarType, RollingStockState } from '../models/RollingStock';
import { station1State, station2State, station3State, station4State } from './FixtureStations';
import { TrainBuilder } from '../models/TrainBuilder';

export const industry1State: IndustryState = createIndustryState(station1State, 'Industry 1', [
  CarType.XM,
  CarType.HT,
]);
export const industry2State: IndustryState = createIndustryState(station1State, 'Industry 2', [
  CarType.XM,
]);
export const industry3State: IndustryState = createIndustryState(station1State, 'Industry 3', [
  CarType.HT,
]);
export const industry4State: IndustryState = createIndustryState(station4State, 'Industry 4', [
  CarType.XMO,
]);

export const industry5State: IndustryState = createIndustryState(station2State, 'Industry 5', [
  CarType.XM,
  CarType.XMO,
]);
export const industry6State: IndustryState = createIndustryState(station3State, 'Industry 6', [
  CarType.All,
]);

export const industry7State: IndustryState = createIndustryState(
  station4State,
  'Industry 7',
  [CarType.XM, CarType.HT],
  [boxcarCP1234State, hopperBCAX5State],
  3,
);
export const industry1 = new Industry(industry1State);
export const industry2 = new Industry(industry2State);
export const industry3 = new Industry(industry3State);
export const industry4 = new Industry(industry4State);

export const industry5 = new Industry(industry5State);
export const industry6 = new Industry(industry6State);
export const industry7 = new Industry(industry7State);

const trainBuilderLocal = new TrainBuilder().name('Local Express');
const trainBuilderAnother = new TrainBuilder().name('Another Train');
const trainBuilderPickUpCars = new TrainBuilder().name('CarsToPickUp');
export const train1State: TrainState = trainBuilderLocal.toState();
export const train2State: TrainState = trainBuilderAnother.toState();
export const train1: Train = trainBuilderLocal.toTrain();

export const train2 = trainBuilderAnother.toTrain();
export const trainToPickUpCars = trainBuilderPickUpCars.toTrain();

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
