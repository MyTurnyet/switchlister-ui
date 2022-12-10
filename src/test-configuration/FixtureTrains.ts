import { Train, TrainState } from '../models/Train';
import { v4 as uuidv4 } from 'uuid';
import { Station, StationState } from '../models/Station';
import { Industry, IndustryState } from '../models/Industry';

export const industry1State: IndustryState = { name: 'Industry 1' };
export const industry1 = new Industry(industry1State);

export const station1State: StationState = { industries: [], name: 'station1' };
export const station2State: StationState = { industries: [], name: 'station2' };
export const station14State: StationState = { industries: [], name: 'station14' };
export const station21State: StationState = { industries: [], name: 'station21' };

export const station1 = new Station(station1State);
export const station2 = new Station(station2State);
export const station14 = new Station(station14State);
export const station21 = new Station(station21State);

export const train1State: TrainState = {
  id: uuidv4(),
  name: 'Local Express',
  stations: [station1State, station2State],
};
export const train2State: TrainState = {
  id: uuidv4(),
  name: 'Another Train',
  stations: [station14State, station2State, station21State],
};
export const train1 = new Train(train1State);
export const train2 = new Train(train2State);
