import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { TrainGrid } from '../TrainGrid';
import { Train } from '../../models/Train';

describe('Train Grid', () => {
  const stationNames1: string[] = ['station 1', 'station 2'];
  const stationNames2: string[] = ['station 3'];
  const testName1 = 'test name1';
  const testName2 = 'test name2';
  const train1 = new Train(testName1, stationNames1);
  const train2 = new Train(testName2, stationNames2);

  const allTrains: Train[] = [train1];
  it('displays the first train', () => {
    const trainGrid: RenderResult = render(<TrainGrid trains={allTrains}></TrainGrid>);
    allTrains.map((train: Train) => {
      trainGrid.getByText(train.name);
      trainGrid.getByText(train.stationNames.length + ' stations');
      train.stationNames.map((stationName) => {
        trainGrid.getByText(stationName);
      });
    });
  });
});
