import React from 'react';
import { RenderResult } from '@testing-library/react';
import App from '../App';
import { renderWithRouter, wrapWithFakeTrainContext } from '../test-configuration/ReactTestToolkit';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../themes/MainTheme';
import { TrainBuilder } from '../models/TrainBuilder';

describe('App', () => {
  let app: RenderResult;

  beforeEach(() => {
    app = renderWithRouter(
      <ThemeProvider theme={mainTheme}>
        {wrapWithFakeTrainContext([], TrainBuilder.EMPTY_TRAIN, <App />)}
      </ThemeProvider>,
    );
  });
  it('renders all routes by default', () => {
    expect(app).toHaveElementsWithText('All Train Routes');
  });
});
