import React from 'react';
import { RenderResult } from '@testing-library/react';
import App from '../App';
import { renderWithRouter, wrapWithFakeTrainContext } from '../test-configuration/ReactTestToolkit';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../themes/MainTheme';
import { Train } from '../models/Train';

describe('App', () => {
  let app: RenderResult;

  beforeEach(() => {
    app = renderWithRouter(
      <ThemeProvider theme={mainTheme}>
        {wrapWithFakeTrainContext([], Train.EMPTY_TRAIN, <App />)}
      </ThemeProvider>,
    );
  });
  it('renders all trains by default', () => {
    expect(app).toHaveElementsWithText('All Trains');
  });
});
