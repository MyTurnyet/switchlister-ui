import { Industry } from '../Industry';
import { industry1, industry1State, industry7 } from '../../test-configuration/FixtureTrains';

describe('Industry', () => {
  it('returns its name', () => {
    expect(industry1.name).toEqual(industry1State.name);
  });
  it('creates an empty collection of placed cars', () => {
    expect(industry1.placedCars.isEmpty()).toEqual(true);
  });
  it('has a collection of placed cars', () => {
    expect(industry7.placedCars.isEmpty()).toEqual(false);
    expect(industry7.placedCars.count).toEqual(2);
  });
});
