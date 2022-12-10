import { axiosRequests } from './AxiosRequests';
import { RollingStockState } from '../../models/RollingStock';

export const RollingStockApi = {
  getRollingStock: (): Promise<RollingStockState[]> => axiosRequests.get('rollingstock'),
};
