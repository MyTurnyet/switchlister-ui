import { TrainPage } from '../TrainPage';
import { Route, Routes } from 'react-router-dom';
import { Train } from '../../../models/Train';
import {
  renderWithRouter,
  wrapWithFakeIndustriesContext,
  wrapWithFakeTrainContext,
  wrapWithThemeProvider,
} from '../../../test-configuration/ReactTestToolkit';
import {
  industry1,
  industry2,
  industry3,
  train1,
  train1State,
} from '../../../test-configuration/FixtureTrains';

function renderTrainPageComponent(
  initialPath: string,
  trainToRenderWithId: Train = Train.EMPTY_TRAIN,
) {
  return renderWithRouter(
    wrapWithThemeProvider(
      wrapWithFakeIndustriesContext(
        [industry1, industry2, industry3],
        wrapWithFakeTrainContext(
          [train1],
          trainToRenderWithId,
          <Routes>
            <Route path={'/trains/:trainId'} element={<TrainPage />}></Route>
          </Routes>,
        ),
      ),
    ),
    initialPath,
  );
}

describe('TrainPage', () => {
  it('renders with a passed id', async () => {
    const initialPath = `/trains/${train1State.id}`;
    const trainPage = renderTrainPageComponent(initialPath, train1);
    expect(trainPage).toHaveElementsWithText(
      'Train Profile',
      train1.name,
      `Station: ${train1.stations.stationNames[0]}`,
      'Industries: (3)',
    );
  });
  it('renders if passed id is bad', async () => {
    const initialPath = '/trains/somethingBad';
    const trainPage = renderTrainPageComponent(initialPath);
    expect(trainPage).toHaveElementsWithText('Train Profile', Train.EMPTY_TRAIN.name);
  });
});
