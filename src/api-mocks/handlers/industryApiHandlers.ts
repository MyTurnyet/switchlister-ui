import { StationState } from '../../models/Station';
import { IndustryState } from '../../models/Industry';
import { ApiHandler } from './ApiHandler';
import {
  industry1State,
  industry2State,
  industry3State,
  industry4State,
  industry5State,
  industry6State,
  industry7State,
} from '../../test-configuration/FixtureIndustries';

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
  'v1/industries',
  industriesToReturn,
);
