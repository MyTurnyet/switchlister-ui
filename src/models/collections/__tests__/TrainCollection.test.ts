import { TrainCollection } from '../TrainCollection';
import { Train, TrainState } from '../../Train';
import {
  train1,
  train1State,
  train2,
  train2State,
} from '../../../test-configuration/FixtureTrains';

describe('Train Collection', () => {
  describe('find by id', () => {
    it('returns EMPTY train if not found', () => {
      const collection = new TrainCollection([]);
      const train = collection.findWithId('fooo!');
      expect(train).toEqual(Train.EMPTY_TRAIN);
    });
    it('returns matching train by id', () => {
      const collectionWithMatching = new TrainCollection([train1, train2]);
      const foundTrain = collectionWithMatching.findWithId(train2.id);
      expect(foundTrain).toEqual(train2);
    });
  });
  it('creates from a train state array', () => {
    const trainsStateArray: TrainState[] = [train1State, train2State];
    const trainCollection = TrainCollection.createFromTrainStateArray(trainsStateArray);
    expect(trainCollection.isEmpty()).toEqual(false);
    expect(trainCollection.count).toEqual(2);
  });
});
