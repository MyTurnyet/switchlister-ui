import React, { useEffect } from 'react';
import { render, RenderResult, waitFor } from '@testing-library/react';
import { RoutesProvider, useRoutesData } from '../RoutesContext';
import { mswServer } from '../../api-mocks/msw-server';
import { ApiHandler } from '../../api-mocks/handlers/ApiHandler';

const TestRoutesConsumer = () => {
  const { routes, refreshRoutesData } = useRoutesData();
  useEffect(() => {
    refreshRoutesData();
  });
  const routesDataOutput = (): string => {
    if (routes.length === 0) {
      return 'No Routes returned!';
    }
    return `count: ${routes.length}`;
  };

  return <div>{routesDataOutput()}</div>;
};

function renderRoutesConsumer() {
  return render(
    <RoutesProvider>
      <TestRoutesConsumer />
    </RoutesProvider>,
  );
}

describe('Routes Context', () => {
  it('returns 0 routes', async () => {
    mswServer.use(ApiHandler.createApiGet('routes', []));
    const routeConsumer: RenderResult = renderRoutesConsumer();
    await waitFor(() => {
      expect(routeConsumer).toHaveElementsWithText('No Routes returned!');
    });
  });
  it('returns 2 routes', async () => {
    const routeConsumer: RenderResult = renderRoutesConsumer();
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
