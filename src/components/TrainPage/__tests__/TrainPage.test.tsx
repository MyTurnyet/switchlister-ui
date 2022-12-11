import { TrainPage } from '../TrainPage';
import { Route, Routes } from 'react-router-dom';
import { Train } from '../../../models/Train';
import {
  renderWithRouter,
  wrapWithFakeTrainContext,
} from '../../../test-configuration/ReactTestToolkit';
import { train1, train1State } from '../../../test-configuration/FixtureTrains';

function renderTrainPageComponent(
  initialPath: string,
  trainToRenderWithId: Train = Train.EMPTY_TRAIN,
) {
  return renderWithRouter(
    wrapWithFakeTrainContext(
      <Routes>
        <Route path={'/trains/:id'} element={<TrainPage />}></Route>
      </Routes>,
      [train1],
      trainToRenderWithId,
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
      `Station: ${train1.stations.stationNames[1]}`,
    );
  });
  it('renders if passed id is bad', async () => {
    const initialPath = '/trains/somethingBad';
    const trainPage = renderTrainPageComponent(initialPath);
    expect(trainPage).toHaveElementsWithText('Train Profile', Train.EMPTY_TRAIN.name);
  });
});
