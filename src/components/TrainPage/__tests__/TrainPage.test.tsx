import { render, waitFor } from '@testing-library/react';
import { TrainPage } from '../TrainPage';
import { MemoryRouter } from 'react-router';
import { train1, train1State, TrainsDataProvider } from '../../../data/TrainsContext';
import { Route, Routes } from 'react-router-dom';
import { Train } from '../../../models/Train';

function renderTrainPageComponent(initialPath: string) {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <TrainsDataProvider>
        <Routes>
          <Route path={'/trains/:id'} element={<TrainPage />}></Route>
        </Routes>
      </TrainsDataProvider>
    </MemoryRouter>,
  );
}

describe('TrainPage', () => {
  it('renders with a passed id', async () => {
    const initialPath = `/trains/${train1State.id}`;
    const trainPage = renderTrainPageComponent(initialPath);
    await waitFor(() => {
      expect(trainPage).toHaveElementsWithText(
        'Train Profile',
        train1.name,
        `Station: ${train1.stationNames[0]}`,
        `Station: ${train1.stationNames[1]}`,
      );
    });
  });
  it('renders if passed id is bad', async () => {
    const initialPath = '/trains/somethingBad';
    const trainPage = renderTrainPageComponent(initialPath);
    await waitFor(() => {
      expect(trainPage).toHaveElementsWithText('Train Profile', Train.EMPTY_TRAIN.name);
    });
  });
});
