import { axiosRequests } from './AxiosRequests';
import { StationState } from '../../models/Station';

export const StationsApi = {
  getStations: (): Promise<StationState[]> => axiosRequests.get('stations'),
  postStation: (stationState: StationState) => axiosRequests.post('stations/update', stationState),
};
