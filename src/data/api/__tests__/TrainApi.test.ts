import { mswServer } from '../../../api-mocks/msw-server';
import { TrainState } from '../../../models/Train';
import { TrainApi } from '../TrainApi';
import { ApiHandler } from '../../../api-mocks/handlers/ApiHandler';

describe('Train Api', () => {
  describe('GET', () => {
    it('returns no trains', async () => {
      mswServer.use(ApiHandler.createApiCall<TrainState[]>('trains', []));
      const trainStates = await TrainApi.getTrains();
      expect(trainStates).toHaveLength(0);
    });
    it('returns 2 trains', async () => {
      const trainStates = await TrainApi.getTrains();
      expect(trainStates).toHaveLength(2);
    });
  });
});
