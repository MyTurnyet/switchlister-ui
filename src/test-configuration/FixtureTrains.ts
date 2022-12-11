import { Train, TrainState } from '../models/Train';
import { v4 as uuidv4 } from 'uuid';
import { Station, StationState } from '../models/Station';
import { Industry, IndustryState } from '../models/Industry';
import { boxcarCP1234State, hopperBCAX5State } from './FixtureRollingStock';
import { RollingStockState } from '../models/RollingStock';

function createIndustryState(
  name: string,
  placeRollingStock: RollingStockState[] = [],
): IndustryState {
  return { name: name, placedCars: placeRollingStock };
}

export const industry1State: IndustryState = createIndustryState('Industry 1');
export const industry1 = new Industry(industry1State);
export const industry2State: IndustryState = createIndustryState('Industry 2');
export const industry2 = new Industry(industry2State);
export const industry3State: IndustryState = createIndustryState('Industry 3');
export const industry3 = new Industry(industry3State);
export const industry4State: IndustryState = createIndustryState('Industry 4');
export const industry4 = new Industry(industry4State);
export const industry5State: IndustryState = createIndustryState('Industry 5');
export const industry5 = new Industry(industry5State);
export const industry6State: IndustryState = createIndustryState('Industry 6');
export const industry6 = new Industry(industry6State);
export const industry7State: IndustryState = createIndustryState('Industry 7', [
  boxcarCP1234State,
  hopperBCAX5State,
]);
export const industry7 = new Industry(industry7State);

export const station1State: StationState = {
  industries: [industry1State, industry2State],
  name: 'station1',
};
export const station2State: StationState = { industries: [industry3State], name: 'station2' };
export const station3State: StationState = {
  industries: [industry4State, industry5State, industry6State],
  name: 'station3',
};
export const station4State: StationState = { industries: [industry7State], name: 'station4' };

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
