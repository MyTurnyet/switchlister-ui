import { mswServer } from '../../../mocks/msw-server';
import { createApiCall } from '../../../mocks/serverHandlers';
import { RollingStockState } from '../../../models/RollingStock';
import { RollingStockApi } from '../RollingStockApi';

describe('Rolling Stock Api', () => {
  describe('GET', () => {
    it('returns 0 cars', async () => {
      mswServer.use(createApiCall<RollingStockState[]>('rollingStock', []));
      const rollingStockStates = await RollingStockApi.getRollingStock();
      expect(rollingStockStates).toHaveLength(0);
    });
    it('returns 2 cars', async () => {
      const rollingStockStates = await RollingStockApi.getRollingStock();
      expect(rollingStockStates).toHaveLength(2);
    });
  });
});
