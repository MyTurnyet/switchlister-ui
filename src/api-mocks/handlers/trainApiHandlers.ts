import { TrainState } from '../../models/Train';
import { ApiHandler } from './ApiHandler';
import { train1State, train2State } from '../../test-configuration/FixtureTrains';

const trainsToReturn: TrainState[] = [train1State, train2State];
export const defaultGetTrains = ApiHandler.createApiCall<TrainState[]>('trains', trainsToReturn);
