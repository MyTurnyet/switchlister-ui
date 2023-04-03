import { axiosRequests } from './AxiosRequests';
import { IndustryState } from '../../models/Industry';
export interface IndustriesApi {
  getIndustries: () => Promise<IndustryState[]>;
}
export const axiosIndustriesApi: IndustriesApi = {
  getIndustries: (): Promise<IndustryState[]> => axiosRequests.get('industries'),
};
