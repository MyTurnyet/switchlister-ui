import { mswServer } from '../../../api-mocks/msw-server';
import { ApiHandler } from '../../../api-mocks/handlers/ApiHandler';
import { IndustryState } from '../../../models/Industry';
import { axiosIndustriesApi } from '../AxiosIndustriesApi';
import {
  industry1State,
  industry2State,
  industry3State,
  industry4State,
  industry5State,
  industry6State,
  industry7State,
} from '../../../test-configuration/FixtureIndustries';
import { setUpTestsWithMSW } from '../../../setupTests';

describe('Axios Industries Api', () => {
  setUpTestsWithMSW();
  describe('GET', () => {
    it('returns no industries', async () => {
      mswServer.use(ApiHandler.createApiGet<IndustryState[]>('v1/industries', []));
      const industriesStates: IndustryState[] = await axiosIndustriesApi.getIndustries();
      expect(industriesStates).toEqual([]);
    });
    it('returns all industries', async () => {
      const industriesStates: IndustryState[] = await axiosIndustriesApi.getIndustries();
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
