import React from 'react';
import { AppLayout } from '../AppLayout';
import {
  renderWithRouter,
  wrapWithFakeTrainContext,
  wrapWithThemeProvider,
} from '../../../test-configuration/ReactTestToolkit';

describe('AppLayout', () => {
  it('renders', () => {
    const appLayout = renderWithRouter(
      wrapWithThemeProvider(wrapWithFakeTrainContext(<AppLayout />)),
    );
    expect(appLayout).toHaveElementsWithText('SwitchLister');
  });
});
