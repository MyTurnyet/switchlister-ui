import { mswServer } from '../../../api-mocks/msw-server';
import { RollingStockState } from '../../../models/RollingStock';
import { axiosRollingStockApi } from '../AxiosRollingStockApi';
import { ApiHandler } from '../../../api-mocks/handlers/ApiHandler';
import { setUpTestsWithMSW } from '../../../setupTests';

describe('Rolling Stock Api', () => {
  setUpTestsWithMSW();
  describe('GET', () => {
    it('returns 0 cars', async () => {
      mswServer.use(ApiHandler.createApiGet<RollingStockState[]>('v1/rolling-stock', []));
      const rollingStockStates = await axiosRollingStockApi.getRollingStock();
      expect(rollingStockStates).toHaveLength(0);
    });
    it('returns 2 cars', async () => {
      const rollingStockStates = await axiosRollingStockApi.getRollingStock();
      expect(rollingStockStates).toHaveLength(2);
    });
  });
});
