import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders all trains by default', () => {
    const app: RenderResult = render(<App />);
    app.getByText('All Trains');
  });
  xit('renders train profile when train is clicked', () => {
    const app: RenderResult = render(<App />);
    const trainCards = app.getAllByText('Train Card');
    trainCards[0].click();
    app.getByText('Train Profile');
  });
});
