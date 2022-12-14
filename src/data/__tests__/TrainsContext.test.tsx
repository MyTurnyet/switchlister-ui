import { TrainsDataProvider, useTrainsData } from '../TrainsContext';
import { render, RenderResult, waitFor } from '@testing-library/react';
import { mswServer } from '../../api-mocks/msw-server';
import { useEffect } from 'react';
import { ApiHandler } from '../../api-mocks/handlers/ApiHandler';

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

function renderTrainConsumer(): RenderResult {
  return render(
    <TrainsDataProvider>
      <TrainsTestConsumer />
    </TrainsDataProvider>,
  );
}

describe('trains context', () => {
  it('returns 0 trains', async () => {
    mswServer.use(ApiHandler.createApiGet('trains', []));
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
