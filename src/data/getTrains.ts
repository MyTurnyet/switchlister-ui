import { Train } from '../models/Train';

export const train1 = new Train('Local Express', ['station 1', 'station 2']);

export const train2 = new Train('Another Train', ['station 14', 'station 2', 'station 21']);
export function getTrains(): Train[] {
  return [train1, train2];
}
