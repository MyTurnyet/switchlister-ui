import React from 'react';
import { render, RenderResult, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { train1, TrainsDataProvider } from '../data/TrainsContext';

describe('App', () => {
  let app: RenderResult;
  beforeEach(() => {
    app = render(
      <TrainsDataProvider>
        <App />
      </TrainsDataProvider>,
      { wrapper: MemoryRouter },
    );
  });
  it('renders all trains by default', () => {
    app.getByText('All Trains');
  });
  it('renders train profile when train is clicked', async () => {
    await waitFor(() => {
      const trainCard = app.getByText(train1.name);
      userEvent.click(trainCard);
      expect(app).toHaveElementsWithText('Train Profile');
    });
  });
  it('renders rolling stock page when the rolling stock link is clicked', () => {
    const rollingStockLink = app.getByText('Rolling Stock Page');
    userEvent.click(rollingStockLink);
    expect(app).toHaveElementsWithText('A bunch of cars got here:');
  });
});
