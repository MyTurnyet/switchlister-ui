import { RollingStockProvider, useRollingStockData } from '../RollingStockContext';
import { render, RenderResult } from '@testing-library/react';
import { RollingStock, RollingStockState } from '../../models/RollingStock';
import { RollingStockApi } from '../api/AxiosRollingStockApi';
import {
  boxcarBN9876State,
  boxcarCP1234State,
  hopperBCAX5State,
} from '../../test-configuration/FixtureRollingStock';

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

function renderWithProvider(data: RollingStockState[]): RenderResult {
  const rollingStockApi: RollingStockApi = {
    getRollingStock(): Promise<RollingStockState[]> {
      return Promise.resolve(data);
    },
  };
  return render(
    <RollingStockProvider rollingStockApi={rollingStockApi}>
      <TestRollingStockConsumer />)
    </RollingStockProvider>,
  );
}

describe('rolling stock context', () => {
  const noCarsWereReturned = 'No cars were returned.';
  it('renders with 0 items', async () => {
    const testConsumer = renderWithProvider([]);
    await testConsumer.findByText('count: 0');
    await testConsumer.findByText(noCarsWereReturned);
  });
  it('renders with 2 items', async () => {
    const testConsumer = renderWithProvider([
      hopperBCAX5State,
      boxcarCP1234State,
      boxcarBN9876State,
    ]);
    await testConsumer.findByText('count: 3');
    await testConsumer.findByText('BCAX 5');
    await testConsumer.findByText('CPR 1234');
    await testConsumer.findByText('BN 9876');
  });
});
