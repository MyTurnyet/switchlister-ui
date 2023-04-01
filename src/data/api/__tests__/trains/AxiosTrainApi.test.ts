import { mswServer } from '../../../../api-mocks/msw-server';
import { TrainState } from '../../../../models/Train';
import { axiosTrainApi } from '../../trains/AxiosTrainApi';
import { ApiHandler } from '../../../../api-mocks/handlers/ApiHandler';

describe('Axios Train Api', () => {
  describe('GET', () => {
    it('returns no trains', async () => {
      mswServer.use(ApiHandler.createApiGet<TrainState[]>('trains', []));
      const trainStates: TrainState[] = await axiosTrainApi.getTrains();
      expect(trainStates).toHaveLength(0);
    });
    it('returns 2 trains', async () => {
      const trainStates: TrainState[] = await axiosTrainApi.getTrains();
      expect(trainStates).toHaveLength(2);
    });
  });
});
