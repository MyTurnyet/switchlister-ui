import { axiosRequests } from './AxiosRequests';
import { RollingStockState } from '../../models/RollingStock';
export interface RollingStockApi {
  getRollingStock: () => Promise<RollingStockState[]>;
}
export const axiosRollingStockApi: RollingStockApi = {
  getRollingStock: (): Promise<RollingStockState[]> => axiosRequests.get('v1/rolling-stock'),
};
