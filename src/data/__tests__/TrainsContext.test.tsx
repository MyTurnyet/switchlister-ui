import { TrainsDataProvider, useTrainsData } from '../TrainsContext';
import { render, waitFor } from '@testing-library/react';
import { mswServer } from '../../mocks/msw-server';
import { useEffect } from 'react';
import { ApiHandler } from '../../mocks/ApiHandler';

const TrainsTestConsumer = () => {
  const { trainCollection, getTrains } = useTrainsData();

  useEffect(() => {
    getTrains();
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

function renderTrainConsumer() {
  return render(
    <TrainsDataProvider>
      <TrainsTestConsumer />
    </TrainsDataProvider>,
  );
}

describe('trains context', () => {
  it('returns 0 trains', async () => {
    mswServer.use(ApiHandler.createApiCall('trains', []));
    const trainsConsumer = renderTrainConsumer();
    await waitFor(() => {
      expect(trainsConsumer).toHaveElementsWithText('count: 0');
    });
  });
  it('returns 2 train', async () => {
    const trainsConsumer = renderTrainConsumer();
    await waitFor(() => {
      expect(trainsConsumer).toHaveElementsWithText('count: 2');
    });
  });
});
