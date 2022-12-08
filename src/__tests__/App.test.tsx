import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { train1 } from '../data/getTrains';
import { MemoryRouter } from 'react-router';

describe('App', () => {
  let app: RenderResult;
  beforeEach(() => {
    app = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
  });
  it('renders all trains by default', () => {
    app.getByText('All Trains');
  });
  it('renders train profile when train is clicked', () => {
    const trainCards = app.getAllByText(train1.name);
    userEvent.click(trainCards[0]);
    app.getByText('Train Profile');
  });
  it('renders rolling stock page when the rolling stock link is clicked', () => {
    const rollingStockLink = app.getByText('Rolling Stock Page');
    userEvent.click(rollingStockLink);
    expect(app).toHaveElementsWithText('A bunch of cars got here:');
  });
});
