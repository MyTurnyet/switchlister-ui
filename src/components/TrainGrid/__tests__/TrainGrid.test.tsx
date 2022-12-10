import React from 'react';
import { RenderResult, waitFor } from '@testing-library/react';
import { TrainGrid } from '../TrainGrid';
import { train1 } from '../../../data/TrainsContext';
import {
  expectHistoryCalledWith,
  renderWithRouter,
} from '../../../test-configuration/ReactTestToolkit';
import userEvent from '@testing-library/user-event';
import { mainTheme } from '../../../themes/MainTheme';
import { ThemeProvider } from 'styled-components';
import { FakeTrainContext } from '../../../test-configuration/FakeTrainContext';

describe('Train Grid', () => {
  let trainGrid: RenderResult;
  beforeEach(() => {
    trainGrid = renderWithRouter(
      <ThemeProvider theme={mainTheme}>
        <FakeTrainContext>
          <TrainGrid />
        </FakeTrainContext>
      </ThemeProvider>,
    );
  });
  it('displays the first train', () => {
    expect(trainGrid).toHaveElementsWithText('All Trains', train1.name, train1.stationNames[0]);
  });
  it('navigates when train card clicked', async () => {
    await waitFor(() => {
      const trainCard = trainGrid.getByText(train1.name);
      userEvent.click(trainCard);
      expectHistoryCalledWith(`/trains/${train1.id}`);
    });
  });
});
