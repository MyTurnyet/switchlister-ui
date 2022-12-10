import { TrainState } from '../models/Train';
import { train1State, train2State } from '../data/TrainsContext';
import { ApiHandler } from './ApiHandler';

const trainsToReturn: TrainState[] = [train1State, train2State];
export const defaultGetTrains = ApiHandler.createApiCall<TrainState[]>('trains', trainsToReturn);
