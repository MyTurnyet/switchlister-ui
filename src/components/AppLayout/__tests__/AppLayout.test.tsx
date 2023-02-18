import React from 'react';
import { AppLayout } from '../AppLayout';
import {
  renderWithRouter,
  wrapWithFakeIndustriesContext,
  wrapWithFakeTrainContext,
  wrapWithThemeProvider,
} from '../../../test-configuration/ReactTestToolkit';
import { Train } from '../../../models/Train';
import { RoutesDataProvider } from '../../../data/TrainRoutesContext';
import { TrainBuilder } from '../../../models/TrainBuilder';

describe('AppLayout', () => {
  it('renders', () => {
    const appLayout = renderWithRouter(
      wrapWithFakeIndustriesContext(
        [],
        wrapWithThemeProvider(
          wrapWithFakeTrainContext(
            [],
            TrainBuilder.EMPTY_TRAIN,
            <RoutesDataProvider>
              <AppLayout />
            </RoutesDataProvider>,
          ),
        ),
      ),
    );
    expect(appLayout).toHaveElementsWithText('SwitchLister');
  });
});
