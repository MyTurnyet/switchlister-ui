import { mswServer } from '../../../mocks/msw-server';
import { createApiCall } from '../../../mocks/serverHandlers';
import { TrainState } from '../../../models/Train';
import { TrainApi } from '../TrainApi';

describe('Train Api', () => {
  describe('GET', () => {
    it('returns no trains', async () => {
      mswServer.use(createApiCall<TrainState[]>('trains', []));
      const trainStates = await TrainApi.getTrains();
      expect(trainStates).toHaveLength(0);
    });
    it('returns 2 trains', async () => {
      const trainStates = await TrainApi.getTrains();
      expect(trainStates).toHaveLength(2);
    });
  });
});