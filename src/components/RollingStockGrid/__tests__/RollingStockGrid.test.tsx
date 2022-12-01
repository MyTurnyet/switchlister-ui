import { render, RenderResult, waitFor } from '@testing-library/react';
import { RollingStockGrid } from '../RollingStockGrid';
import { RollingStockProvider } from '../../../data/RollingStockContext';

describe('rolling stock grid', () => {
  it('takes a list of rolling stock', async () => {
    const rollingStockGrid: RenderResult = render(
      <RollingStockProvider>
        <RollingStockGrid />
      </RollingStockProvider>,
    );

    expect(rollingStockGrid).toHaveElementsWithText('Loading!');
    await waitFor(() => {
      expect(rollingStockGrid).toHaveElementsWithText('BCAX 5');
    });
  });
});
