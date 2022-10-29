import { Train } from '../models/Train';

export function getTrains(): Train[] {
  const train1 = new Train('Local Express', ['station 1', 'station 2']);
  const train2 = new Train('Another Train', ['station 14', 'station 2', 'station 21']);

  return [train1, train2];
}
