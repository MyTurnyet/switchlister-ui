import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { TrainGrid } from '../TrainGrid';
import { Train } from '../../../models/Train';
import { getTrains } from '../../../data/getTrains';
import { MemoryRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const stationNames1: string[] = ['station 1', 'station 2'];
const stationNames2: string[] = ['station 3'];
const testName1 = 'test name1';
const testName2 = 'test name2';
const train1 = new Train(testName1, stationNames1);

const train2 = new Train(testName2, stationNames2);
const allTrains: Train[] = [train1, train2];

jest.mock('../../../data/getTrains');

const mockGetTrains = getTrains as jest.MockedFn<typeof getTrains>;

describe('Train Grid', () => {
  it('displays the first train', () => {
    mockGetTrains.mockReturnValue(allTrains);
    const trainGrid: RenderResult = render(
      <BrowserRouter>
        <TrainGrid />
      </BrowserRouter>,
    );
    allTrains.map((train: Train) => {
      trainGrid.getByText(train.name);
      trainGrid.getByText(train.stationNames.length + ' stations');
      train.stationNames.map((stationName) => {
        trainGrid.getByText(stationName);
      });
    });
  });
});
