import { render, RenderResult } from '@testing-library/react';
import { RollingStockGrid } from '../RollingStockGrid';
import { RollingStock } from '../../../models/RollingStock';

describe('rolling stock grid', () => {
  it('takes a list of rolling stock', () => {
    const allCars: RollingStock[] = [];
    const rsGrid: RenderResult = render(<RollingStockGrid />);
    rsGrid.getByText('Rolling stock grid');
  });
});
