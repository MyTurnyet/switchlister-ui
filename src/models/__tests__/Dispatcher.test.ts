import { Dispatcher } from '../Dispatcher';
import { routeStation1Local } from '../../test-configuration/FixtureRoutes';
import { Train } from '../Train';
import { Itinerary } from '../Itinerary';
import { CarType, RollingStock } from '../RollingStock';
import { IndustryCollection } from '../collections/IndustryCollection';
import { TrainBuilder } from '../TrainBuilder';
import { industry1, industry2, industry3, industry7 } from '../../test-configuration/FixtureIndustries'
import { boxcarCP1234 } from '../../test-configuration/FixtureRollingStock'

describe('Dispatcher', () => {
  let dispatcher: Dispatcher;
  let localSwitcher: Train;
  let industries: IndustryCollection;
  describe('with one station', () => {
    beforeEach(() => {
      localSwitcher = new TrainBuilder().name('single switcher').toTrain();
      industries = new IndustryCollection([industry1, industry2, industry7]);
      const itinerary = new Itinerary(localSwitcher, routeStation1Local);
      dispatcher = new Dispatcher(itinerary, industries);
    });
    it('finds no XMO cars at current station', () => {
      const carForPickup = dispatcher.findCarForPickup(CarType.XMO);
      expect(carForPickup).toEqual(RollingStock.EMPTY);
    });
    it('finds one XM car at current station', () => {
      const carForPickup = dispatcher.findCarForPickup(CarType.XM);
      expect(carForPickup).toEqual(boxcarCP1234);
    });
  });
});
