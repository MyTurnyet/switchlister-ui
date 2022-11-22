import { RollingStockProvider, useRollingStockData } from '../RollingStockContext';
import { render, RenderResult } from '@testing-library/react';

const TestRollingStockConsumer = () => {
  const contextState = useRollingStockData();
  return <div>count: {contextState.rollingStock.length}</div>;
};

function renderWithProvider(): RenderResult {
  return render(
    <RollingStockProvider>
      <TestRollingStockConsumer />)
    </RollingStockProvider>,
  );
}

describe('rolling stock context', () => {
  it('renders with 0 items', () => {
    const testConsumer = renderWithProvider();
    testConsumer.getByText('count: 0');
  });
});
