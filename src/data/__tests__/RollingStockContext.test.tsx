import { RollingStockProvider, useRollingStockData } from '../RollingStockContext';
import { render, RenderResult, waitFor } from '@testing-library/react';
import { RollingStock, RollingStockState } from '../../models/RollingStock';
import { mswServer } from '../../api-mocks/msw-server';
import { ApiHandler } from '../../api-mocks/handlers/ApiHandler';

const TestRollingStockConsumer = () => {
  const contextState = useRollingStockData();
  const carsReturned = contextState.rollingStock.count;
  return (
    <div>
      count: {carsReturned}
      {carsReturned === 0 && <div>No cars were returned.</div>}
      {contextState.rollingStock.map((item: RollingStock, index) => {
        return <div key={index}>{item.displayName}</div>;
      })}
    </div>
  );
};

function renderWithProvider(): RenderResult {
  return render(
    <RollingStockProvider>
      <TestRollingStockConsumer />)
    </RollingStockProvider>,
  );
}

describe('rolling stock context', () => {
  const noCarsWereReturned = 'No cars were returned.';
  it('renders with 0 items', async () => {
    mswServer.use(ApiHandler.createApiGet<RollingStockState[]>('rollingStock', []));
    const testConsumer = renderWithProvider();
    await testConsumer.findByText('count: 0');
    await testConsumer.findByText(noCarsWereReturned);
  });
  it('renders with 2 items', async () => {
    const testConsumer = renderWithProvider();
    await testConsumer.findByText('count: 2');
    await testConsumer.findByText('BCAX 5');
    await testConsumer.findByText('CPR 1234');
  });
});
