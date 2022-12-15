import React from 'react';
import { AppLayout } from '../AppLayout';
import {
  renderWithRouter,
  wrapWithFakeTrainContext,
  wrapWithThemeProvider,
} from '../../../test-configuration/ReactTestToolkit';
import { Train } from '../../../models/Train';

describe('AppLayout', () => {
  it('renders', () => {
    const appLayout = renderWithRouter(
      wrapWithThemeProvider(wrapWithFakeTrainContext([], Train.EMPTY_TRAIN, <AppLayout />)),
    );
    expect(appLayout).toHaveElementsWithText('SwitchLister');
  });
});
