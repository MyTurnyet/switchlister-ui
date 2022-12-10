import React from 'react';
import { RenderResult } from '@testing-library/react';
import App from '../App';
import { TrainsDataProvider } from '../data/TrainsContext';
import { renderWithRouter } from '../test-configuration/ReactTestToolkit';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../themes/MainTheme';

describe('App', () => {
  let app: RenderResult;

  beforeEach(() => {
    app = renderWithRouter(
      <ThemeProvider theme={mainTheme}>
        <TrainsDataProvider>
          <App />
        </TrainsDataProvider>
      </ThemeProvider>,
    );
  });
  it('renders all trains by default', () => {
    app.getByText('All Trains');
  });
});
