import { TrainRoutePage } from '../TrainRoutePage';
import { Route, Routes } from 'react-router-dom';
import { Train } from '../../../models/Train';
import {
  renderWithRouter,
  wrapWithFakeIndustriesContext,
  wrapWithFakeTrainRoutesContext,
  wrapWithThemeProvider,
} from '../../../test-configuration/ReactTestToolkit';
import { train1 } from '../../../test-configuration/FixtureTrains';
import { routeStation1Local } from '../../../test-configuration/FixtureRoutes';
import { TrainRoute } from '../../../models/TrainRoute';
import { TrainBuilder } from '../../../models/TrainBuilder';
import { industry1, industry2, industry3 } from '../../../test-configuration/FixtureIndustries';

function renderRoutePageComponent(
  initialPath: string,
  trainToRenderWithId: Train = TrainBuilder.EMPTY_TRAIN,
  routeToRender: TrainRoute = TrainRoute.EMPTY_ROUTE,
) {
  return renderWithRouter(
    wrapWithThemeProvider(
      wrapWithFakeIndustriesContext(
        [industry1, industry2, industry3],
        wrapWithFakeTrainRoutesContext(
          [routeToRender],
          <Routes>
            <Route path={'/routes/:routeId'} element={<TrainRoutePage />}></Route>
          </Routes>,
        ),
      ),
    ),
    initialPath,
  );
}

describe('Train Route Page', () => {
  it('renders with a passed id', async () => {
    const initialPath = `/routes/${routeStation1Local.id}`;
    const trainPage = renderRoutePageComponent(initialPath, train1, routeStation1Local);
    expect(trainPage).toHaveElementsWithText(
      'Route Profile',
      routeStation1Local.name,
      `Station: ${routeStation1Local.stations.first().name}`,
      'Industries: (3)',
    );
  });
  it('renders if passed id is bad', async () => {
    const initialPath = '/routes/somethingBad';
    const trainPage = renderRoutePageComponent(initialPath);
    expect(trainPage).toHaveElementsWithText('Route Profile', TrainRoute.EMPTY_ROUTE.name);
  });
});
