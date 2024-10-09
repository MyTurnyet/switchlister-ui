import { axiosRequests } from './AxiosRequests';
import { StationState } from '../../models/Station';

export interface StationsApi {
  getStations: () => Promise<StationState[]>;
}

export const axiosStationsApi: StationsApi = {
  getStations: (): Promise<StationState[]> => axiosRequests.get('v1/stations'),
  // postStation: (stationState: StationState) => axiosRequests.post('stations/update', stationState),
};
