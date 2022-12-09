import { render } from '@testing-library/react';
import React from 'react';
import { AppLayout } from '../AppLayout';
import { renderWithRouter } from '../../../test-configuration/ReactTestToolkit';

describe('AppLayout', () => {
  it('renders', () => {
    const appLayout = renderWithRouter(<AppLayout />);
    expect(appLayout).toHaveElementsWithText('SwitchLister');
  });
});
