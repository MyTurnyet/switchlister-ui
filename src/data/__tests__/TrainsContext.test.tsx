import { TrainsProvider, useTrainsData } from '../TrainsContext';
import { render, RenderResult, waitFor } from '@testing-library/react';
import { useEffect } from 'react';
import { TrainApi } from '../api/AxiosTrainApi';
import { TrainState } from '../../models/Train';
import { train1State, train2State } from '../../test-configuration/FixtureTrains';

const TrainsTestConsumer = () => {
  const { trainCollection, refreshTrainsData } = useTrainsData();

  useEffect(() => {
    refreshTrainsData();
  });

  return (
    <div>
      <div>count: {trainCollection.count}</div>
      {trainCollection.map((train) => (
        <div key={train.name}>{train.name}</div>
      ))}
    </div>
  );
};

function renderTrainConsumer(returnedData: TrainState[]): RenderResult {
  const trainApi: TrainApi = {
    getTrains(): Promise<TrainState[]> {
      return Promise.resolve(returnedData);
    },
  };
  return render(
    <TrainsProvider trainApi={trainApi}>
      <TrainsTestConsumer />
    </TrainsProvider>,
  );
}

describe('trains context', () => {
  it('returns 0 trains', async () => {
    const trainsConsumer = renderTrainConsumer([]);
    await waitFor(() => {
      expect(trainsConsumer).toHaveElementsWithText('count: 0');
    });
  });
  it('returns 2 train', async () => {
    const trainsConsumer = renderTrainConsumer([train1State, train2State]);
    await waitFor(() => {
      expect(trainsConsumer).toHaveElementsWithText('count: 2');
    });
  });
  it('throws if not wrapped with TrainsProvider', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {
      return;
    });
    expect(() => render(<TrainsTestConsumer />)).toThrowError(
      new Error(
        'useTrainsData must be used inside of a TrainsProvider, ' +
          'otherwise it will not function correctly.',
      ),
    );
  });
});
