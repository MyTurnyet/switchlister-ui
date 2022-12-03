import { createContext, useContext } from 'react';
import { Train } from '../models/Train';

const train1 = new Train('Local Express', ['station 1', 'station 2']);
const train2 = new Train('Another Train', ['station 14', 'station 2', 'station 21']);

export const TrainsContext = createContext({ trains: [train1, train2] });

export const useTrainsData = () => {
  return useContext(TrainsContext);
};
