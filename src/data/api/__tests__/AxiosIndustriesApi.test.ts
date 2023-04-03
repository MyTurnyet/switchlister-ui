import { mswServer } from '../../../api-mocks/msw-server';
import { ApiHandler } from '../../../api-mocks/handlers/ApiHandler';
import { IndustryState } from '../../../models/Industry';
import { AxiosIndustriesApi } from '../AxiosIndustriesApi';
import {
  industry1State,
  industry2State,
  industry3State,
  industry4State,
  industry5State,
  industry6State,
  industry7State,
} from '../../../test-configuration/FixtureIndustries';

describe('Axios Industries Api', () => {
  describe('GET', () => {
    it('returns no industries', async () => {
      mswServer.use(ApiHandler.createApiGet<IndustryState[]>('industries', []));
      const industriesStates: IndustryState[] = await AxiosIndustriesApi.getIndustries();
      expect(industriesStates).toEqual([]);
    });
    it('returns all industries', async () => {
      const industriesStates: IndustryState[] = await AxiosIndustriesApi.getIndustries();
      expect(industriesStates).toMatchInAnyOrder([
        industry1State,
        industry2State,
        industry3State,
        industry4State,
        industry5State,
        industry6State,
        industry7State,
      ]);
    });
  });
});
