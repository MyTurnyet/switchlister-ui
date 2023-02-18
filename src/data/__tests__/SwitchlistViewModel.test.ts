import { neededTypesForIndustries } from '../SwitchlistViewModel';
import { IndustryCollection } from '../../models/collections/IndustryCollection';
import { industry1 } from '../../test-configuration/FixtureIndustries';

describe('Switchlist View Model', () => {
  it('returns needed car types for an industry', () => {
    neededTypesForIndustries(new IndustryCollection([industry1]));
  });
});
