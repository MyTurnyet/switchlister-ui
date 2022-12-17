import {
  industryXmHtNoCars,
  industryXmHtNoCarsState,
  industryXmHtTwoCarsState,
  industryXmNoCars,
  station0State,
} from '../../test-configuration/FixtureTrains';
import { CarType } from '../RollingStock';
import { boxcarBN9876 } from '../../test-configuration/FixtureRollingStock';
import { Industry } from '../Industry';

describe('Industry', () => {
  describe('data', () => {
    it('returns its name', () => {
      expect(industryXmHtNoCars.name).toEqual(industryXmHtNoCarsState.name);
    });
    it('has an id', () => {
      expect(industryXmHtNoCars.id).toEqual(industryXmHtNoCarsState.id);
    });
    it('has a station id', () => {
      expect(industryXmHtNoCars.staionId).toEqual(station0State.id);
    });
    it('has a max carCount of 1', () => {
      expect(industryXmHtNoCars.maxCarCount).toEqual(1);
    });
    it('services a boxcar', () => {
      expect(industryXmNoCars.servicesCarType(CarType.XM)).toEqual(true);
    });
    it('does not service a hopper', () => {
      expect(industryXmNoCars.servicesCarType(CarType.HT)).toEqual(false);
    });
    it('provides a list of serviced car types', () => {
      expect(industryXmHtNoCars.servicedCarTypes).toEqual([CarType.XM, CarType.HT]);
    });
  });
  describe('placed cars', () => {
    let industryWithNoCars: Industry;
    let industryWith2Cars: Industry;
    beforeEach(() => {
      industryWithNoCars = new Industry(industryXmHtNoCarsState);
      industryWith2Cars = new Industry(industryXmHtTwoCarsState);
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
  });
});
