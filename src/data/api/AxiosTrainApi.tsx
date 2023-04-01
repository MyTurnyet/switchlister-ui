import { TrainState } from '../../models/Train';
import { axiosRequests } from './AxiosRequests';

export interface TrainApi {
  getTrains: () => Promise<TrainState[]>;
}

export const axiosTrainApi: TrainApi = {
  getTrains: (): Promise<TrainState[]> => axiosRequests.get('trains'),
};
