import { ApiHandler } from './ApiHandler';
import { StationState } from '../../models/Station';
import {
  station1State,
  station2State,
  station3State,
  station4State,
} from '../../test-configuration/FixtureTrains';
import { Industry, IndustryState } from '../../models/Industry';

const stationsToReturn: StationState[] = [
  station1State,
  station2State,
  station3State,
  station4State,
];
export const defaultGetStations = ApiHandler.createApiGet<StationState[]>(
  'stations',
  stationsToReturn,
);
export const defaultPostIndustry = ApiHandler.createApiPost<IndustryState[]>('stations/industry');
