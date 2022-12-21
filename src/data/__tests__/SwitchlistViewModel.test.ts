import { neededTypesForIndustries } from '../SwitchlistViewModel';
import { industry1 } from '../../test-configuration/FixtureTrains';
import { IndustryCollection } from '../../models/collections/IndustryCollection';

describe('Switchlist View Model', () => {
  it('returns needed car types for an industry', () => {
    neededTypesForIndustries(new IndustryCollection([industry1]));
  });
});
