import React, { useEffect } from 'react';
import { StationsProvider, useStationsData } from '../StationsContext';
import { Station, StationState } from '../../models/Station';
import { render, RenderResult, waitFor } from '@testing-library/react';
import { mswServer } from '../../api-mocks/msw-server';
import { ApiHandler } from '../../api-mocks/handlers/ApiHandler';
import { clickButtonWithText } from '../../test-configuration/ReactTestToolkit';
import { Industry } from '../../models/Industry';
import { industryXmHtNoCars } from '../../test-configuration/FixtureTrains';
import { boxcarBN9876 } from '../../test-configuration/FixtureRollingStock';
import { RollingStock } from '../../models/RollingStock';
import { deflateRaw } from 'zlib';

const StationsTestConsumer = () => {
  const { stations, refreshData, setCarAtIndustry } = useStationsData();

  useEffect(() => {
    refreshData();
  }, [stations]);

  const handleClick = () => {
    setCarAtIndustry(industryXmHtNoCars, boxcarBN9876);
  };

  return (
    <div>
      <div>count: {stations.count}</div>
      {stations.map((station: Station) => (
        <>
          <div key={station.name}>{station.name}</div>
          {station.industries.map((industry: Industry) => {
            return (
              <div key={industry.id}>
                <button onClick={handleClick} key={industry.name}>
                  {industry.name}
                </button>
                {industry.placedCars.map((car: RollingStock) => (
                  <div key={car.id}>{car.displayName}</div>
                ))}
              </div>
            );
          })}
        </>
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
  describe('functions', () => {
    it('sets a car at an industry', async () => {
      const stationConsumer = renderStationConsumer();
      await waitFor(() => {
        clickButtonWithText(stationConsumer, industryXmHtNoCars.name);
        expect(stationConsumer).toHaveElementsWithText(boxcarBN9876.displayName);
      });
    });
    it('gets all stations for an industry', async () => {
      const stationConsumer = renderStationConsumer();
      await waitFor(() => {
        expect(stationConsumer).toHaveElementsWithText('Industry 4', 'Industry 5', 'Industry 6');
      });
    });
  });
});
