import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('renders all trains by default', () => {
    const app: RenderResult = render(<App />);
    app.getByText('All Trains');
  });
  it('renders train profile when train is clicked', () => {
    const app: RenderResult = render(<App />);
    const trainCards = app.getAllByText('Train Card');
    userEvent.click(trainCards[0]);
    app.getByText('Train Profile');
  });
});
