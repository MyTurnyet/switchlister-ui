import React, { useEffect } from 'react';
import { render, RenderResult, waitFor } from '@testing-library/react';
import { IndustriesProvider, useIndustryData } from '../IndustriesContext';
import { mswServer } from '../../api-mocks/msw-server';
import { ApiHandler } from '../../api-mocks/handlers/ApiHandler';
import { Industry, IndustryState } from '../../models/Industry';
import {
  industry1State,
  industry2State,
  industry3State,
  industry4State,
  station1,
} from '../../test-configuration/FixtureTrains';

const IndustryContextTesConsumer = () => {
  const { refreshData, industries, industriesAtStation } = useIndustryData();

  useEffect(() => {
    refreshData();
  }, [industries]);

  return (
    <div>
      <div>FOO!</div>
      {industries.map((industry: Industry) => (
        <div key={industry.id}>{industry.name}</div>
      ))}
      <div>station1 x {industriesAtStation(station1).count}</div>
    </div>
  );
};
describe('Industries Context', () => {
  let testConsumer: RenderResult;
  beforeEach(() => {
    mswServer.use(
      ApiHandler.createApiGet<IndustryState[]>('industries', [
        industry1State,
        industry2State,
        industry3State,
        industry4State,
      ]),
    );
    testConsumer = render(
      <IndustriesProvider>
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
      expect(testConsumer).toHaveElementsWithText('station1 x 3');
    });
  });
});
