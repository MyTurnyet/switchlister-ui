import { Train, TrainState } from '../models/Train';
import { v4 as uuidv4 } from 'uuid';
import { Station, StationState } from '../models/Station';
import { Industry, IndustryState } from '../models/Industry';
import { boxcarCP1234State, hopperBCAX5State } from './FixtureRollingStock';
import { CarType, RollingStockState } from '../models/RollingStock';

function createIndustryState(
  name: string,
  servicedCarTypes: string[] = [],
  placedCars: RollingStockState[] = [],
  maxCarCount = 1,
): IndustryState {
  return { name, placedCars, servicedCarTypes, maxCarCount };
}

export const industryXmHtNoCarsState: IndustryState = createIndustryState('Industry 1', [
  CarType.XM,
  CarType.HT,
]);
export const industryXmHtNoCars = new Industry(industryXmHtNoCarsState);
export const industryXmNoCarsState: IndustryState = createIndustryState('Industry 2', [CarType.XM]);
export const industryXmNoCars = new Industry(industryXmNoCarsState);
export const industryHtNoCarsState: IndustryState = createIndustryState('Industry 3', [CarType.HT]);
export const industryHtNoCars = new Industry(industryHtNoCarsState);
export const industryXmoNoCarsState: IndustryState = createIndustryState('Industry 4', [
  CarType.XMO,
]);
export const industryXmoNoCars = new Industry(industryXmoNoCarsState);
export const industryXmXmoNoCarsState: IndustryState = createIndustryState('Industry 5', [
  CarType.XM,
  CarType.XMO,
]);
export const industryXmXmoNoCars = new Industry(industryXmXmoNoCarsState);
export const industryAllNoCarsState: IndustryState = createIndustryState('Industry 6', [
  CarType.All,
]);
export const industryAllNoCars = new Industry(industryAllNoCarsState);
export const industryXmHtTwoCarsState: IndustryState = createIndustryState(
  'Industry 7',
  [CarType.XM, CarType.HT],
  [boxcarCP1234State, hopperBCAX5State],
  3,
);
export const industryXmHtTwoCars = new Industry(industryXmHtTwoCarsState);

export function createStationState(name: string, industries: IndustryState[]): StationState {
  return {
    id: uuidv4(),
    industries,
    name,
  };
}

export const station0State: StationState = createStationState('station0', []);
export const station1State: StationState = createStationState('station1', [
  industryXmHtNoCarsState,
  industryXmNoCarsState,
]);
export const station2State: StationState = createStationState('station2', [industryHtNoCarsState]);
export const station3State: StationState = createStationState('station3', [
  industryXmoNoCarsState,
  industryXmXmoNoCarsState,
  industryAllNoCarsState,
]);
export const station4State: StationState = createStationState('station4', [
  industryXmHtTwoCarsState,
]);

export const station1 = new Station(station1State);
export const station2 = new Station(station2State);
export const station3 = new Station(station3State);
export const station4 = new Station(station4State);

function createTrainState(name: string, stations: StationState[]): TrainState {
  return {
    id: uuidv4(),
    name,
    stations,
  };
}

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
