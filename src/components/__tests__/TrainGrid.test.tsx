import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { TrainGrid } from '../TrainGrid';
import { Train } from '../../models/Train';

describe('Train Grid', () => {
  it('displays the first train', () => {
    const expectedNames: string[] = ['station 1', 'station 2'];
    const trainName = 'test name';
    const train = new Train(trainName, expectedNames);

    const trainGrid: RenderResult = render(<TrainGrid trains={[train]}></TrainGrid>);
    trainGrid.getByText(trainName);
    trainGrid.getByText('2 stations');
    trainGrid.getByText('station 1');
    trainGrid.getByText('station 2');
  });
});
