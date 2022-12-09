import React from 'react';
import { RenderResult } from '@testing-library/react';
import App from '../App';
import { TrainsDataProvider } from '../data/TrainsContext';
import { renderWithRouter } from '../test-configuration/ReactTestToolkit';

describe('App', () => {
  let app: RenderResult;

  beforeEach(() => {
    app = renderWithRouter(
      <TrainsDataProvider>
        <App />
      </TrainsDataProvider>,
    );
  });
  it('renders all trains by default', () => {
    app.getByText('All Trains');
  });
});
