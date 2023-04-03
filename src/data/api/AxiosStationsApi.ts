import { axiosRequests } from './AxiosRequests';
import { StationState } from '../../models/Station';

export interface StationsApi {
  getStations: () => Promise<StationState[]>;
}

export const axiosStationsApi: StationsApi = {
  getStations: (): Promise<StationState[]> => axiosRequests.get('stations'),
  // postStation: (stationState: StationState) => axiosRequests.post('stations/update', stationState),
};
