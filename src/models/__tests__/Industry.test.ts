import { CarType, RollingStock } from '../RollingStock';
import { boxcarBN9876, boxcarCP1234 } from '../../test-configuration/FixtureRollingStock';
import { Industry } from '../Industry';
import { station1 } from '../../test-configuration/FixtureStations';
import {
  industry1,
  industry1State,
  industry2,
  industry7State,
} from '../../test-configuration/FixtureIndustries';
import { IndustryBuilder } from '../IndustryBuilder';

describe('Industry', () => {
  describe('data', () => {
    it('returns its name', () => {
      expect(industry1.name).toEqual(industry1State.name);
    });
    it('has an id', () => {
      expect(industry1.id).toEqual(industry1State.id);
    });
    it('has a station id', () => {
      expect(industry1.stationId).toEqual(station1.id);
    });
    it('has a max carCount of 1', () => {
      expect(industry1.maxCarCount).toEqual(1);
    });
    it('services a boxcar', () => {
      expect(industry2.servicesCarType(CarType.XM)).toEqual(true);
    });
    it('does not service a hopper', () => {
      expect(industry2.servicesCarType(CarType.HT)).toEqual(false);
    });
    it('provides a list of serviced car types', () => {
      expect(industry1.servicedCarTypes).toEqual([CarType.XM, CarType.HT]);
    });
  });
  describe('placed cars', () => {
    let industryWithNoCars: Industry;
    let industryWith2Cars: Industry;
    beforeEach(() => {
      industryWithNoCars = industry2;
      industryWith2Cars = new IndustryBuilder(industry7State).toIndustry();
    });
    it('returns an empty collection ', () => {
      expect(industryWithNoCars.placedCars.isEmpty()).toEqual(true);
    });
    it('returns a collection with two cars', () => {
      expect(industryWith2Cars.placedCars.isEmpty()).toEqual(false);
      expect(industryWith2Cars.placedCars.count).toEqual(2);
    });
    it('adds a car to the industry', () => {
      industryWithNoCars.setOut(boxcarBN9876);
      expect(industryWithNoCars.placedCars.count).toEqual(1);
    });
    it('picks up a car', () => {
      const pickedUpCar: RollingStock = industryWith2Cars.pickUp(boxcarCP1234);
      expect(pickedUpCar).toEqual(boxcarCP1234);
      expect(industryWith2Cars.placedCars.count).toEqual(1);
    });
  });
});
