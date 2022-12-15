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

export const station1State: StationState = {
  industries: [industryXmHtNoCarsState, industryXmNoCarsState],
  name: 'station1',
};
export const station2State: StationState = {
  industries: [industryHtNoCarsState],
  name: 'station2',
};
export const station3State: StationState = {
  industries: [industryXmoNoCarsState, industryXmXmoNoCarsState, industryAllNoCarsState],
  name: 'station3',
};
export const station4State: StationState = {
  industries: [industryXmHtTwoCarsState],
  name: 'station4',
};

export const station1 = new Station(station1State);
export const station2 = new Station(station2State);
export const station3 = new Station(station3State);
export const station4 = new Station(station4State);

export const train1State: TrainState = {
  id: uuidv4(),
  name: 'Local Express',
  stations: [station1State, station2State],
};
export const train2State: TrainState = {
  id: uuidv4(),
  name: 'Another Train',
  stations: [station3State, station2State, station4State],
};
export const train1 = new Train(train1State);
export const train2 = new Train(train2State);
