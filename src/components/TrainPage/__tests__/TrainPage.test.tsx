import { render } from '@testing-library/react';
import { TrainPage } from '../TrainPage';
import { MemoryRouter } from 'react-router';
import { train1, TrainsDataProvider } from '../../../data/TrainsContext';
import { Route, Routes } from 'react-router-dom';

function renderTrainPageComponent(initialPath: string) {
  return render(
    <TrainsDataProvider>
      <MemoryRouter initialEntries={[initialPath]} initialIndex={1}>
        <Routes>
          <Route path={'/trains/:id'} element={<TrainPage />}></Route>
        </Routes>
      </MemoryRouter>
    </TrainsDataProvider>,
  );
}

describe('TrainPage', () => {
  it('renders without crashing', () => {
    const initialPath = `/trains/${train1.id}`;
    const trainPage = renderTrainPageComponent(initialPath);
    expect(trainPage).toHaveElementsWithText(
      'Train Profile',
      train1.name,
      train1.stationNames[0],
      train1.stationNames[1],
    );
  });
});
