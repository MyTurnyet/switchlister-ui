import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { TrainCard } from '../TrainCard';
import { Train } from '../../models/Train';
describe('Train Card', () => {
  const expectedNames: string[] = ['station 1', 'station 2'];
  const trainName = 'test name';
  const train = new Train(trainName, expectedNames);

  it('Creates', () => {
    const trainCard: RenderResult = render(<TrainCard train={train} />);
    trainCard.getByText(trainName);
    trainCard.getByText('2 stations');
    trainCard.getByText('station 1');
  });
});
