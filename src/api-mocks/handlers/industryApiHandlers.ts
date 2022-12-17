import { StationState } from '../../models/Station';
import {
  industry1State,
  industry2State,
  industry3State,
  industry4State,
  industry5State,
  industry6State,
  industry7State,
} from '../../test-configuration/FixtureTrains';
import { IndustryState } from '../../models/Industry';
import { ApiHandler } from './ApiHandler';

const industriesToReturn: IndustryState[] = [
  industry1State,
  industry2State,
  industry3State,
  industry4State,
  industry5State,
  industry6State,
  industry7State,
];

export const defaultGetIndustries = ApiHandler.createApiGet<IndustryState[]>(
  'industries',
  industriesToReturn,
);
