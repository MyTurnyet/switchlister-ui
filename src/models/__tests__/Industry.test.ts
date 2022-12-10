import { Industry } from '../Industry';
import { industry1, industry1State } from '../../test-configuration/FixtureTrains';

describe('Industry', () => {
  it('creates', () => {
    expect(industry1.name).toEqual(industry1State.name);
  });
});
