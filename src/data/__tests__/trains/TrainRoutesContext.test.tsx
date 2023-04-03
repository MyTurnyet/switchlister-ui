import React, { useEffect } from 'react';
import { render, RenderResult, waitFor } from '@testing-library/react';
import { RoutesDataProvider, useTrainRoutesData } from '../../trains/TrainRoutesContext';
import { mswServer } from '../../../api-mocks/msw-server';
import { ApiHandler } from '../../../api-mocks/handlers/ApiHandler';
import { RoutesApi } from '../../api/AxiosRoutesApi';
import { RouteState } from '../../../models/TrainRoute';
import { routeStateLocal, routeStateTwoStation } from '../../../test-configuration/FixtureRoutes';

const TestRoutesConsumer = () => {
  const { trainRoutes, refreshRoutesData } = useTrainRoutesData();
  useEffect(() => {
    refreshRoutesData();
  });
  const routesDataOutput = (): string => {
    if (trainRoutes.isEmpty()) {
      return 'No Routes returned!';
    }
    return `count: ${trainRoutes.count}`;
  };

  return <div>{routesDataOutput()}</div>;
};

function renderRoutesConsumer(dataReturned: RouteState[]) {
  const routesApi: RoutesApi = {
    getRoutes(): Promise<RouteState[]> {
      return Promise.resolve(dataReturned);
    },
  };
  return render(
    <RoutesDataProvider routesApi={routesApi}>
      <TestRoutesConsumer />
    </RoutesDataProvider>,
  );
}

describe('Train Routes Context', () => {
  it('returns 0 routes', async () => {
    const routeConsumer: RenderResult = renderRoutesConsumer([]);
    await waitFor(() => {
      expect(routeConsumer).toHaveElementsWithText('No Routes returned!');
    });
  });
  it('returns 2 routes', async () => {
    const routeConsumer: RenderResult = renderRoutesConsumer([
      routeStateLocal,
      routeStateTwoStation,
    ]);
    await waitFor(() => {
      expect(routeConsumer).toHaveElementsWithText('count: 2');
    });
  });
  it('throws if not wrapped with TrainsProvider', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {
      return;
    });
    expect(() => render(<TestRoutesConsumer />)).toThrowError(
      new Error(
        'useRoutesData must be used inside of a RoutesProvider, ' +
          'otherwise it will not function correctly.',
      ),
    );
  });
});
