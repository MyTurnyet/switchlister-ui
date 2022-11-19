import { render, RenderResult } from '@testing-library/react';
import { RollingStockGrid } from '../RollingStockGrid';
import exp from 'constants';

describe('rolling stock grid', () => {
  it('takes a list of rolling stock', () => {
    const rsGrid: RenderResult = render(<RollingStockGrid />);
    rsGrid.getByText('Rolling stock grid');
  });
});
