import { Train } from '../Train';
import { station1State, station2State } from '../../test-configuration/FixtureTrains';
import { StationCollection } from '../collections/StationCollection';
import { boxcarCP1234 } from '../../test-configuration/FixtureRollingStock';

describe('Train', () => {
  let train: Train;
  beforeEach(() => {
    train = new Train({ id: 'foo!', name: 'train name', stations: [] });
  });
  it('always has a name', () => {
    expect(train.name).toEqual('train name');
  });

  it('returns empty list of station names by default', () => {
    expect(train.stations.isEmpty()).toEqual(true);
  });

  it('has a list of defined station names', () => {
    const train = new Train({
      id: 'foo!',
      name: 'test name',
      stations: [station1State, station2State],
    });
    const stations: StationCollection = train.stations;
    expect(stations.count).toEqual(2);
  });
  it('has no attached cars', () => {
    expect(train.rollingStock.count).toEqual(0);
  });
  it('picks up rolling stock', () => {
    train.pickUp(boxcarCP1234);
    expect(train.rollingStock.count).toEqual(1);
    expect(train.rollingStock.contains(boxcarCP1234));
  });
  it('has no attached cars', () => {
    expect(train.rollingStock.count).toEqual(0);
  });
});
