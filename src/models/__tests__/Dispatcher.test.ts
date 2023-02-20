import { Dispatcher } from '../Dispatcher';
import { routeStation1Local } from '../../test-configuration/FixtureRoutes';
import { Train } from '../Train';
import { Itinerary } from '../Itinerary';
import { CarType, RollingStock } from '../RollingStock';
import { IndustryCollection } from '../collections/IndustryCollection';
import { TrainBuilder } from '../TrainBuilder';
import { industry1, industry2, industry3 } from '../../test-configuration/FixtureIndustries';

describe('Dispatcher', () => {
  let dispatcher: Dispatcher;
  let localSwitcher: Train;
  let industries: IndustryCollection;
  describe('with one station', () => {
    beforeEach(() => {
      localSwitcher = new TrainBuilder().name('single switcher').toTrain();
      industries = new IndustryCollection([industry1, industry2, industry3]);
      const itinerary = new Itinerary(localSwitcher, routeStation1Local);
      dispatcher = new Dispatcher(itinerary, industries);
    });
    it('finds no XM cars at current station', () => {
      const carForPickup = dispatcher.findCarForPickup(CarType.XM);
      expect(carForPickup).toEqual(RollingStock.EMPTY);
    });
  });
});
