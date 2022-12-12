import { ApiHandler } from './ApiHandler';
import { StationState } from '../../models/Station';
import {
  station1State,
  station2State,
  station3State,
  station4State,
} from '../../test-configuration/FixtureTrains';

const stationsToReturn: StationState[] = [
  station1State,
  station2State,
  station3State,
  station4State,
];
export const defaultGetStations = ApiHandler.createApiCall<StationState[]>(
  'stations',
  stationsToReturn,
);
