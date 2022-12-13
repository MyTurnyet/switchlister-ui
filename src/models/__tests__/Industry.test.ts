import {
  industry1,
  industry1State,
  industry2,
  industry7,
} from '../../test-configuration/FixtureTrains';
import { CarType } from '../RollingStock';
import { CarTypesCollection } from '../collections/CarTypesCollection';

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
  it('services a boxcar', () => {
    expect(industry2.services(CarType.XM)).toEqual(true);
  });
  it('does not service a hopper', () => {
    expect(industry2.services(CarType.HT)).toEqual(false);
  });
  it('provides a list of serviced car types', () => {
    expect(industry1.servicedCarTypes).toEqual([CarType.XM, CarType.HT]);
  });
});
