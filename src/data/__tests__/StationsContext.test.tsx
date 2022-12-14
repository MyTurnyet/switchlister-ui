import React, { useEffect } from 'react';
import { StationsDataProvider, useStationsData } from '../StationsContext';
import { Station, StationState } from '../../models/Station';
import { render, RenderResult, waitFor } from '@testing-library/react';
import { mswServer } from '../../api-mocks/msw-server';
import { ApiHandler } from '../../api-mocks/handlers/ApiHandler';
import { clickButtonWithText } from '../../test-configuration/ReactTestToolkit';

const StationsTestConsumer = () => {
  const { stationsCollection, getStations } = useStationsData();

  useEffect(() => {
    getStations();
  });

  const handleClick = () => {
    return;
  };

  return (
    <div>
      <div>count: {stationsCollection.count}</div>
      {stationsCollection.map((station: Station) => (
        <div key={station.name}>{station.name}</div>
      ))}
      <button title={'add industry'} onClick={handleClick}>
        add industry
      </button>
    </div>
  );
};

function renderStationConsumer(): RenderResult {
  return render(
    <StationsDataProvider>
      <StationsTestConsumer />
    </StationsDataProvider>,
  );
}

describe('Stations Context', () => {
  describe('outputs', () => {
    it('has no stations', async () => {
      mswServer.use(ApiHandler.createApiCall<StationState[]>('stations', []));
      const stationConsumer = renderStationConsumer();
      await waitFor(() => {
        expect(stationConsumer).toHaveElementsWithText('count: 0');
      });
    });
    it('has four stations', async () => {
      const stationConsumer = renderStationConsumer();
      await waitFor(() => {
        expect(stationConsumer).toHaveElementsWithText('count: 4');
      });
    });
  });
  describe('functions', () => {
    it('adds an industry to the station', () => {
      const stationConsumer = renderStationConsumer();
      clickButtonWithText(stationConsumer, 'add industry');
    });
  });
});
