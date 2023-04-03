import { mswServer } from '../../../api-mocks/msw-server';
import { ApiHandler } from '../../../api-mocks/handlers/ApiHandler';
import { StationState } from '../../../models/Station';
import { axiosStationsApi } from '../AxiosStationsApi';

describe('Station Api', () => {
  describe('GET', () => {
    it('returns no stations', async () => {
      mswServer.use(ApiHandler.createApiGet<StationState[]>('stations', []));
      const stationStates: StationState[] = await axiosStationsApi.getStations();
      expect(stationStates).toHaveLength(0);
    });
    it('returns 2 trains', async () => {
      const stationStates: StationState[] = await axiosStationsApi.getStations();
      expect(stationStates).toHaveLength(4);
    });
  });
});
