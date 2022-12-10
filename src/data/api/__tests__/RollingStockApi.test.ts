import { mswServer } from '../../../mocks/msw-server';
import { RollingStockState } from '../../../models/RollingStock';
import { RollingStockApi } from '../RollingStockApi';
import { ApiHandler } from '../../../mocks/ApiHandler';

describe('Rolling Stock Api', () => {
  describe('GET', () => {
    it('returns 0 cars', async () => {
      mswServer.use(ApiHandler.createApiCall<RollingStockState[]>('rollingStock', []));
      const rollingStockStates = await RollingStockApi.getRollingStock();
      expect(rollingStockStates).toHaveLength(0);
    });
    it('returns 2 cars', async () => {
      const rollingStockStates = await RollingStockApi.getRollingStock();
      expect(rollingStockStates).toHaveLength(2);
    });
  });
});
