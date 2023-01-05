import { TrainMaker } from '../TrainMaker';
import { trainToPickUpCars } from '../../test-configuration/FixtureTrains';

describe('train maker', () => {
  it('creates a list of needed cars by station', () => {
    const trainMaker = new TrainMaker(trainToPickUpCars);
    const pickUpList: string[] = trainMaker.pickUpList;
    expect(pickUpList).toEqual(['CP 1234']);
  });
});
