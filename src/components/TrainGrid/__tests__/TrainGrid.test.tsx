import React from 'react';
import { render, RenderResult, waitFor } from '@testing-library/react';
import { TrainGrid } from '../TrainGrid';
import { train1, TrainsDataProvider } from '../../../data/TrainsContext';
import { MemoryRouter } from 'react-router';

describe('Train Grid', () => {
  it('displays the first train', async () => {
    const trainGrid: RenderResult = render(
      <TrainsDataProvider>
        <TrainGrid />
      </TrainsDataProvider>,
      { wrapper: MemoryRouter },
    );
    await waitFor(() => {
      expect(trainGrid).toHaveElementsWithText('All Trains', train1.name, train1.stationNames[0]);
    });
  });
});
