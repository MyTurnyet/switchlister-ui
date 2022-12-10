import { TrainState } from '../../models/Train';
import { axiosRequests } from './AxiosRequests';

export const TrainsApi = {
  getTrains: (): Promise<TrainState[]> => axiosRequests.get('trains'),
};
