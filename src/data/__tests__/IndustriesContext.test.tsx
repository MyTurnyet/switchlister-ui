import React, { useEffect } from 'react';
import { render, RenderResult, waitFor } from '@testing-library/react';
import { IndustriesProvider, useIndustryData } from '../IndustriesContext';
import { mswServer } from '../../api-mocks/msw-server';
import { ApiHandler } from '../../api-mocks/handlers/ApiHandler';
import { Industry, IndustryState } from '../../models/Industry';
import { industry1State } from '../../test-configuration/FixtureTrains';

const IndustryContextTesConsumer = () => {
  const { refreshData, industries } = useIndustryData();

  useEffect(() => {
    refreshData();
  }, [industries]);

  return (
    <div>
      <div>FOO!</div>
      {industries.map((industry: Industry) => (
        <div key={industry.id}>{industry.name}</div>
      ))}
    </div>
  );
};
describe('Industries Context', () => {
  let testConsumer: RenderResult;
  beforeEach(() => {
    mswServer.use(ApiHandler.createApiGet<IndustryState[]>('industries', [industry1State]));
    testConsumer = render(
      <IndustriesProvider>
        <IndustryContextTesConsumer />
      </IndustriesProvider>,
    );
  });
  it('renders', async () => {
    await waitFor(() => {
      expect(testConsumer).toHaveElementsWithText(industry1State.name);
    });
  });
});
