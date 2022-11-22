import { useRollingStockData } from '../RollingStockContext';
import { render, RenderResult } from '@testing-library/react';

const TestRollingStockConsumerNoProvider = () => {
  const contextState = useRollingStockData();
  return <div>count: {contextState.rollingStock.length}</div>;
};

function renderWithoutProvider(): RenderResult {
  return render(<TestRollingStockConsumerNoProvider />);
}

describe('rolling stock context', () => {
  it('renders with 0 items', () => {
    const testConsumer = renderWithoutProvider();
    testConsumer.getByText('count: 0');
  });
});
