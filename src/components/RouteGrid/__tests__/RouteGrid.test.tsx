import React from 'react';
import { RenderResult, waitFor } from '@testing-library/react';
import { RouteGrid } from '../RouteGrid';
import {
  expectHistoryCalledWith,
  renderWithRouter,
  wrapWithFakeTrainContext,
  wrapWithThemeProvider,
} from '../../../test-configuration/ReactTestToolkit';
import userEvent from '@testing-library/user-event';
import { train1 } from '../../../test-configuration/FixtureTrains';
import { Train } from '../../../models/Train';

describe('Route Grid', () => {
  let trainGrid: RenderResult;
  beforeEach(() => {
    trainGrid = renderWithRouter(
      wrapWithThemeProvider(wrapWithFakeTrainContext([train1], Train.EMPTY_TRAIN, <RouteGrid />)),
    );
  });
  it('displays the first route', () => {
    expect(trainGrid).toHaveElementsWithText(
      'All Train Routes',
      train1.name,
      train1.stations.stationNames[0],
    );
  });
  it('navigates when train card clicked', async () => {
    await waitFor(() => {
      const trainCard = trainGrid.getByText(train1.name);
      userEvent.click(trainCard);
      expectHistoryCalledWith(`/trains/${train1.id}`);
    });
  });
});
