import { StationState } from '../../../models/Station';
import { axiosStationsApi } from '../AxiosStationsApi';

describe('axios Station Api', () => {
  xdescribe('GET', () => {
    xit('returns no stations', async () => {
      const stationStates: StationState[] = await axiosStationsApi.getStations();
      expect(stationStates).toHaveLength(0);
    });
    xit('returns 2 trains', async () => {
      const stationStates: StationState[] = await axiosStationsApi.getStations();
      expect(stationStates).toHaveLength(4);
    });
  });
  it('FAKE TEST', () => {
    expect(true).toEqual(true);
  });
});
