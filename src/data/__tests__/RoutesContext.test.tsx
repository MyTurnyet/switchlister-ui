import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { RoutesProvider, useRoutesData } from '../RoutesContext';

const TestRoutesConsumer = () => {
  const routesData = useRoutesData();
  const routesDataOutput = (): string => {
    return 'No Routes returned!';
  };
  return <div>{routesDataOutput()}</div>;
};

describe('Routes Context', () => {
  it('returns 0 routes', () => {
    const routeConsumer: RenderResult = render(
      <RoutesProvider>
        <TestRoutesConsumer />
      </RoutesProvider>,
    );
    expect(routeConsumer).toHaveElementsWithText('No Routes returned!');
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
