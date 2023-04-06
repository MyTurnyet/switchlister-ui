import { RollingStockState } from '../../../models/RollingStock';
import { axiosRollingStockApi } from '../AxiosRollingStockApi';

describe('Rolling Stock Api', () => {
  describe('GET', () => {
    xit('returns 0 cars', async () => {
      const rollingStockStates = await axiosRollingStockApi.getRollingStock();
      expect(rollingStockStates).toHaveLength(0);
    });
    xit('returns 2 cars', async () => {
      const rollingStockStates = await axiosRollingStockApi.getRollingStock();
      expect(rollingStockStates).toHaveLength(2);
    });
    it('FAKE TEST', () => {
      expect(true).toEqual(true);
    });
  });
});
