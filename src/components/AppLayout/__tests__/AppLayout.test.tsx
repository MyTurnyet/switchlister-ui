import React from 'react';
import { AppLayout } from '../AppLayout';
import {
  renderWithRouter,
  wrapWithFakeIndustriesContext,
  wrapWithFakeTrainContext,
  wrapWithThemeProvider,
} from '../../../test-configuration/ReactTestToolkit';
import { Train } from '../../../models/Train';
import { RoutesDataProvider } from '../../../data/RoutesContext';

describe('AppLayout', () => {
  it('renders', () => {
    const appLayout = renderWithRouter(
      wrapWithFakeIndustriesContext(
        [],
        wrapWithThemeProvider(
          wrapWithFakeTrainContext(
            [],
            Train.EMPTY_TRAIN,
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
