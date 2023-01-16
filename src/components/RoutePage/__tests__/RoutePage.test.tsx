import { RoutePage } from '../RoutePage';
import { Route, Routes } from 'react-router-dom';
import { Train } from '../../../models/Train';
import {
  renderWithRouter,
  wrapWithFakeIndustriesContext,
  wrapWithFakeRoutesContext,
  wrapWithFakeTrainContext,
  wrapWithThemeProvider,
} from '../../../test-configuration/ReactTestToolkit';
import { industry1, industry2, industry3, train1 } from '../../../test-configuration/FixtureTrains';
import { routeLocal } from '../../../test-configuration/FixtureRoutes';
import { TrainRoute } from '../../../models/TrainRoute';

function renderRoutePageComponent(
  initialPath: string,
  trainToRenderWithId: Train = Train.EMPTY_TRAIN,
  routeToRender: TrainRoute = TrainRoute.EMPTY_ROUTE,
) {
  return renderWithRouter(
    wrapWithThemeProvider(
      wrapWithFakeIndustriesContext(
        [industry1, industry2, industry3],
        wrapWithFakeRoutesContext(
          [routeToRender],
          wrapWithFakeTrainContext(
            [train1],
            trainToRenderWithId,
            <Routes>
              <Route path={'/routes/:routeId'} element={<RoutePage />}></Route>
            </Routes>,
          ),
        ),
      ),
    ),
    initialPath,
  );
}

describe('Route Page', () => {
  it('renders with a passed id', async () => {
    const initialPath = `/routes/${routeLocal.id}`;
    const trainPage = renderRoutePageComponent(initialPath, train1, routeLocal);
    expect(trainPage).toHaveElementsWithText(
      'Route Profile',
      routeLocal.name,
      `Station: ${routeLocal.stations[0].name}`,
      'Industries: (3)',
    );
  });
  it('renders if passed id is bad', async () => {
    const initialPath = '/routes/somethingBad';
    const trainPage = renderRoutePageComponent(initialPath);
    expect(trainPage).toHaveElementsWithText('Route Profile', TrainRoute.EMPTY_ROUTE.name);
  });
});
