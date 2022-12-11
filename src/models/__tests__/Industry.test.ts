import { Industry } from '../Industry';
import { industry1, industry1State } from '../../test-configuration/FixtureTrains';

describe('Industry', () => {
  it('returns its name', () => {
    expect(industry1.name).toEqual(industry1State.name);
  });
  it('has creates a collection of placed cars from IndustryState', () => {
    expect(industry1.placedCars.isEmpty()).toEqual(true);
  });
});
