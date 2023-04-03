import { axiosRequests } from './AxiosRequests';
import { IndustryState } from '../../models/Industry';

export const AxiosIndustriesApi = {
  getIndustries: (): Promise<IndustryState[]> => axiosRequests.get('industries'),
};
