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
import { routeStation1Local } from '../../../test-configuration/FixtureRoutes';

describe('Route Grid', () => {
  let trainGrid: RenderResult;
  beforeEach(() => {
    trainGrid = renderWithRouter(
      wrapWithThemeProvider(wrapWithFakeTrainRoutesContext([routeStation1Local], <RouteGrid />)),
    );
  });
  it('displays the first route', () => {
    expect(trainGrid).toHaveElementsWithText(
      'All Train Routes',
      routeStation1Local.name,
      routeStation1Local.stations.first().name,
    );
  });
  it('navigates when train card clicked', async () => {
    const trainCard = trainGrid.getByText(routeStation1Local.name);
    userEvent.click(trainCard);
    expectHistoryCalledWith(`/routes/${routeStation1Local.id}`);
  });
});
