import { RollingStockProvider } from '../../data/RollingStockContext';
import { RollingStockGrid } from '../RollingStockGrid/RollingStockGrid';

export const RollingStockPage = () => {
  return (
    <>
      <div>This is the rolling stock page</div>
      <RollingStockProvider>
        <RollingStockGrid />
      </RollingStockProvider>
    </>
  );
};
