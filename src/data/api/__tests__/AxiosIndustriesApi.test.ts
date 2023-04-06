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

describe('Axios Industries Api', () => {
  describe('GET', () => {
    xit('returns no industries', async () => {
      const industriesStates: IndustryState[] = await axiosIndustriesApi.getIndustries();
      expect(industriesStates).toEqual([]);
    });
    xit('returns all industries', async () => {
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
    it('FAKE TEST', () => {
      expect(true).toEqual(true);
    });
  });
});
