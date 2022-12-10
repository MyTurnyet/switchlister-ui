import React from 'react';
import { RenderResult } from '@testing-library/react';
import App from '../App';
import { renderWithRouter, wrapWithFakeTrainContext } from '../test-configuration/ReactTestToolkit';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../themes/MainTheme';

describe('App', () => {
  let app: RenderResult;

  beforeEach(() => {
    app = renderWithRouter(
      <ThemeProvider theme={mainTheme}>{wrapWithFakeTrainContext(<App />)}</ThemeProvider>,
    );
  });
  it('renders all trains by default', () => {
    expect(app).toHaveElementsWithText('All Trains');
  });
});
