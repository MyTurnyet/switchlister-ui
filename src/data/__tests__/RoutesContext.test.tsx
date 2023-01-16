import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { useRoutesData } from '../RoutesContext';

const TestRoutesConsumer = () => {
  const routesData = useRoutesData();
  return <div>FOO!</div>;
};

describe('Routes Context', () => {
  xit('returns 0 routes', () => {
    const routeConsumer: RenderResult = render(<TestRoutesConsumer />);
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
