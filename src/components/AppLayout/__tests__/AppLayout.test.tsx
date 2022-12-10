import React from 'react';
import { AppLayout } from '../AppLayout';
import { renderWithRouter } from '../../../test-configuration/ReactTestToolkit';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../../themes/MainTheme';

describe('AppLayout', () => {
  it('renders', () => {
    const appLayout = renderWithRouter(
      <ThemeProvider theme={mainTheme}>
        <AppLayout />
      </ThemeProvider>,
    );
    expect(appLayout).toHaveElementsWithText('SwitchLister');
  });
});
