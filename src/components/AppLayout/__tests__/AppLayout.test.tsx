import { render } from '@testing-library/react';
import React from 'react';
import { AppLayout } from '../AppLayout';

describe('AppLayout', () => {
  it('renders', () => {
    const appLayout = render(<AppLayout />);
    expect(appLayout).toHaveElementsWithText('SwitchLister');
  });
});
