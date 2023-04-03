import { axiosRequests } from './AxiosRequests';
import { RollingStockState } from '../../models/RollingStock';

export const axiosRollingStockApi = {
  getRollingStock: (): Promise<RollingStockState[]> => axiosRequests.get('rollingstock'),
};
