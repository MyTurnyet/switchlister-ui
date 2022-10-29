import { Train } from '../../models/Train';
import { getTrains } from '../getTrains';

describe('getTrains', () => {
  const train1 = new Train('Local Express', ['station 1', 'station 2']);
  const train2 = new Train('Another Train', ['station 14', 'station 2', 'station 21']);

  const expectedTrainsArray: Train[] = [train1, train2];

  it('gets an empty list of trains', () => {
    const trains: Train[] = getTrains();
    expect(trains).toEqual(expectedTrainsArray);
  });
});
