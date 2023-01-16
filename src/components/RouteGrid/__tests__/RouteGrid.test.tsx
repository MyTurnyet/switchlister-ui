import React from 'react';
import { RenderResult } from '@testing-library/react';
import { RouteGrid } from '../RouteGrid';
import {
  expectHistoryCalledWith,
  renderWithRouter,
  wrapWithFakeTrainRoutesContext,
  wrapWithThemeProvider,
} from '../../../test-configuration/ReactTestToolkit';
import userEvent from '@testing-library/user-event';
import { routeLocal } from '../../../test-configuration/FixtureRoutes';

describe('Route Grid', () => {
  let trainGrid: RenderResult;
  beforeEach(() => {
    trainGrid = renderWithRouter(
      wrapWithThemeProvider(wrapWithFakeTrainRoutesContext([routeLocal], <RouteGrid />)),
    );
  });
  it('displays the first route', () => {
    expect(trainGrid).toHaveElementsWithText(
      'All Train Routes',
      routeLocal.name,
      routeLocal.stations[0].name,
    );
  });
  it('navigates when train card clicked', async () => {
    const trainCard = trainGrid.getByText(routeLocal.name);
    userEvent.click(trainCard);
    expectHistoryCalledWith(`/routes/${routeLocal.id}`);
  });
});
