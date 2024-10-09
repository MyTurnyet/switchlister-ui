import { ApiHandler } from './ApiHandler';
import { StationState } from '../../models/Station';
import { IndustryState } from '../../models/Industry';
import {
  station1State,
  station2State,
  station3State,
  station4State,
} from '../../test-configuration/FixtureStations';

const stationsToReturn: StationState[] = [
  station1State,
  station2State,
  station3State,
  station4State,
];
export const defaultGetStations = ApiHandler.createApiGet<StationState[]>(
  'v1/stations',
  stationsToReturn,
);
export const defaultPostIndustry = ApiHandler.createApiPost<IndustryState[]>('stations/industry');
