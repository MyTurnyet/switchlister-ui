import { TrainState } from '../../models/Train';
import { axiosRequests } from './AxiosRequests';

export const TrainApi = {
  getTrains: (): Promise<TrainState[]> => axiosRequests.get('trains'),
};
