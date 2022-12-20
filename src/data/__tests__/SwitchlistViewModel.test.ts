import { neededTypesForIndustries } from '../SwitchlistViewModel';
import { industryXmHtNoCars } from '../../test-configuration/FixtureTrains';
import { IndustryCollection } from '../../models/collections/IndustryCollection';

describe('Switchlist View Model', () => {
  it('returns needed car types for an industry', () => {
    neededTypesForIndustries(new IndustryCollection([industryXmHtNoCars]));
  });
});
