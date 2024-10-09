import { mswServer } from '../../../api-mocks/msw-server';
import { ApiHandler } from '../../../api-mocks/handlers/ApiHandler';
import { StationState } from '../../../models/Station';
import { axiosStationsApi } from '../AxiosStationsApi';
import { setUpTestsWithMSW } from '../../../setupTests';

describe('Station Api', () => {
  setUpTestsWithMSW();
  describe('GET', () => {
    it('returns no stations', async () => {
      mswServer.use(ApiHandler.createApiGet<StationState[]>('v1/stations', []));
      const stationStates: StationState[] = await axiosStationsApi.getStations();
      expect(stationStates).toHaveLength(0);
    });
    it('returns 2 trains', async () => {
      const stationStates: StationState[] = await axiosStationsApi.getStations();
      expect(stationStates).toHaveLength(4);
    });
  });
});
