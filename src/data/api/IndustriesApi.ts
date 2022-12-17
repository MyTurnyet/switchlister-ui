import { axiosRequests } from './AxiosRequests';
import { IndustryState } from '../../models/Industry';

export const IndustriesApi = {
  getIndustries: (): Promise<IndustryState[]> => axiosRequests.get('industries'),
};
