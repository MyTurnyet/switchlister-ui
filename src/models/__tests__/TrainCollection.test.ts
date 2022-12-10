import { TrainCollection } from '../TrainCollection';
import { Train } from '../Train';
import { train1, train2 } from '../../data/TrainsContext';

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
});
