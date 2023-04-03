import React, { useEffect } from 'react';
import { StationsProvider, useStationsData } from '../StationsContext';
import { Station, StationState } from '../../models/Station';
import { render, RenderResult, waitFor } from '@testing-library/react';
import { mswServer } from '../../api-mocks/msw-server';
import { ApiHandler } from '../../api-mocks/handlers/ApiHandler';
import { boxcarBN9876 } from '../../test-configuration/FixtureRollingStock';
import { StationsApi } from '../api/AxiosStationsApi';
import {
  station1State,
  station2State,
  station3State,
  station4State,
} from '../../test-configuration/FixtureStations';

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

function renderStationConsumer(dataReturned: StationState[] = []): RenderResult {
  const stationsApi: StationsApi = {
    getStations(): Promise<StationState[]> {
      return Promise.resolve(dataReturned);
    },
  };
  return render(
    <StationsProvider stationsApi={stationsApi}>
      <StationsTestConsumer />
    </StationsProvider>,
  );
}

describe('Stations Context', () => {
  describe('outputs', () => {
    it('has no stations', async () => {
      const stationConsumer = renderStationConsumer([]);
      await waitFor(() => {
        expect(stationConsumer).toHaveElementsWithText('count: 0');
      });
    });
    it('has four stations', async () => {
      const stationConsumer = renderStationConsumer([
        station1State,
        station2State,
        station3State,
        station4State,
      ]);
      await waitFor(() => {
        expect(stationConsumer).toHaveElementsWithText('count: 4');
        expect(stationConsumer).toNotHaveElementsWithText(boxcarBN9876.displayName);
      });
    });
  });
});
