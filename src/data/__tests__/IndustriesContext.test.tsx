import React, { useEffect } from 'react';
import { render, RenderResult, waitFor } from '@testing-library/react';
import { IndustriesProvider, useIndustryData } from '../IndustriesContext';
import { Industry, IndustryState } from '../../models/Industry';
import { station1, station4 } from '../../test-configuration/FixtureStations';
import {
  industry1State,
  industry2State,
  industry3State,
  industry4State,
} from '../../test-configuration/FixtureIndustries';
import { IndustriesApi } from '../api/AxiosIndustriesApi';

const IndustryContextTesConsumer = () => {
  const { refreshIndustriesData, industries, industriesAtStation } = useIndustryData();

  useEffect(() => {
    refreshIndustriesData();
  }, [industries]);

  return (
    <div>
      <div>FOO!</div>
      {industries.map((industry: Industry) => (
        <div key={industry.id}>{industry.name}</div>
      ))}
      <div>
        {station1.name} x {industriesAtStation(station1).count}
      </div>
      <div>
        {station4.name} x {industriesAtStation(station4).count}
      </div>
    </div>
  );
};
describe('Industries Context', () => {
  let testConsumer: RenderResult;
  beforeEach(() => {
    const industryApi: IndustriesApi = {
      getIndustries(): Promise<IndustryState[]> {
        return Promise.resolve([industry1State, industry2State, industry3State, industry4State]);
      },
    };

    testConsumer = render(
      <IndustriesProvider industryApi={industryApi}>
        <IndustryContextTesConsumer />
      </IndustriesProvider>,
    );
  });
  it('renders industry names', async () => {
    await waitFor(() => {
      expect(testConsumer).toHaveElementsWithText(
        industry1State.name,
        industry2State.name,
        industry3State.name,
        industry4State.name,
      );
    });
  });
  it('should have the station 1 name three times', async () => {
    await waitFor(() => {
      expect(testConsumer).toHaveElementsWithText(`${station1.name} x 3`, `${station4.name} x 1`);
    });
  });
});
