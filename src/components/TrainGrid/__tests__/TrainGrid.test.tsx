import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { TrainGrid } from '../TrainGrid';
import { BrowserRouter } from 'react-router-dom';
import { train1, TrainsDataProvider } from '../../../data/TrainsContext';

describe('Train Grid', () => {
  it('displays the first train', () => {
    const trainGrid: RenderResult = render(
      <BrowserRouter>
        <TrainsDataProvider>
          <TrainGrid />
        </TrainsDataProvider>
      </BrowserRouter>,
    );

    expect(trainGrid).toHaveElementsWithText('All Trains', train1.name, train1.stationNames[0]);
  });
});
