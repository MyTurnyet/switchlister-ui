import { mswServer } from '../../../../api-mocks/msw-server';
import { TrainState } from '../../../../models/Train';
import { axiosTrainApi } from '../../trains/AxiosTrainApi';
import { ApiHandler } from '../../../../api-mocks/handlers/ApiHandler';
import { setUpTestsWithMSW } from '../../../../setupTests';

describe('Axios Train Api', () => {
  setUpTestsWithMSW();
  describe('GET', () => {
    it('returns no trains', async () => {
      mswServer.use(ApiHandler.createApiGet<TrainState[]>('v1/trains', []));
      const trainStates: TrainState[] = await axiosTrainApi.getTrains();
      expect(trainStates).toHaveLength(0);
    });
    it('returns 2 trains', async () => {
      const trainStates: TrainState[] = await axiosTrainApi.getTrains();
      expect(trainStates).toHaveLength(2);
    });
  });
});
