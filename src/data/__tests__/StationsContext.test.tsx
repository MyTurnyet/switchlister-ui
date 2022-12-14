import React, { useEffect } from 'react';
import { StationsProvider, useStationsData } from '../StationsContext';
import { Station, StationState } from '../../models/Station';
import { render, RenderResult, waitFor } from '@testing-library/react';
import { mswServer } from '../../api-mocks/msw-server';
import { ApiHandler } from '../../api-mocks/handlers/ApiHandler';
import { boxcarBN9876 } from '../../test-configuration/FixtureRollingStock';

const StationsTestConsumer = () => {
  const { stations, refreshStationsData } = useStationsData();

  useEffect(() => {
    refreshStationsData();
  }, [stations]);

  return (
    <div>
      <div>count: {stations.count}</div>
      {stations.map((station: Station) => (
        <div key={station.name}>{station.name}</div>
      ))}
    </div>
  );
};

function renderStationConsumer(): RenderResult {
  return render(
    <StationsProvider>
      <StationsTestConsumer />
    </StationsProvider>,
  );
}

describe('Stations Context', () => {
  describe('outputs', () => {
    it('has no stations', async () => {
      mswServer.use(ApiHandler.createApiGet<StationState[]>('stations', []));
      const stationConsumer = renderStationConsumer();
      await waitFor(() => {
        expect(stationConsumer).toHaveElementsWithText('count: 0');
      });
    });
    it('has four stations', async () => {
      const stationConsumer = renderStationConsumer();
      await waitFor(() => {
        expect(stationConsumer).toHaveElementsWithText('count: 4');
        expect(stationConsumer).toNotHaveElementsWithText(boxcarBN9876.displayName);
      });
    });
  });
});
