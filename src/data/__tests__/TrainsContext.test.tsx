import { TrainsDataProvider, useTrainsData } from '../TrainsContext';
import { render, waitFor } from '@testing-library/react';
import { mswServer } from '../../mocks/msw-server';
import { createApiCall } from '../../mocks/serverHandlers';
import { TrainState } from '../../models/Train';

const TrainsTestConsumer = () => {
  const { trains } = useTrainsData();
  return (
    <div>
      <div>count: {trains.length}</div>
      {trains.map((train) => (
        <div key={train.name}>{train.name}</div>
      ))}
    </div>
  );
};

function renderWithProvider() {
  return render(
    <TrainsDataProvider>
      <TrainsTestConsumer />
    </TrainsDataProvider>,
  );
}

describe('trains context', () => {
  it('returns 0 trains', async () => {
    mswServer.use(createApiCall<TrainState[]>('trains', []));
    const trainsConsumer = renderWithProvider();
    await waitFor(() => {
      expect(trainsConsumer).toHaveElementsWithText('count: 0');
    });
  });
  it('returns 0 trains', async () => {
    const trainsConsumer = renderWithProvider();
    await waitFor(() => {
      expect(trainsConsumer).toHaveElementsWithText('count: 2');
    });
  });
});
