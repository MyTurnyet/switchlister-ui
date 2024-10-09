import { axiosRequests } from './AxiosRequests';
import { RouteState } from '../../models/TrainRoute';

export interface RoutesApi {
  getRoutes: () => Promise<RouteState[]>;
}
export const axiosRoutesApi: RoutesApi = {
  getRoutes: (): Promise<RouteState[]> => axiosRequests.get('v1/routes'),
};
