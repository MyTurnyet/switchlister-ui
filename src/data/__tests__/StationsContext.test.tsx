import React, { useEffect } from 'react';
import { StationsDataProvider, useStationsData } from '../StationsContext';
import { Station } from '../../models/Station';
import { render, RenderResult, waitFor } from '@testing-library/react';

const StationsTestConsumer = () => {
  const { stationsCollection, getStations } = useStationsData();

  useEffect(() => {
    getStations();
  });

  return (
    <div>
      <div>count: {stationsCollection.count}</div>
      {stationsCollection.map((station: Station) => (
        <div key={station.name}>{station.name}</div>
      ))}
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
  it('has no stations', async () => {
    const stationConsumer = renderStationConsumer();
    await waitFor(() => {
      expect(stationConsumer).toHaveElementsWithText('count: 0');
    });
  });
});
