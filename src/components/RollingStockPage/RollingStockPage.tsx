import { RollingStockProvider, useRollingStockData } from '../../data/RollingStockContext';
import { RollingStockGrid } from '../RollingStockGrid/RollingStockGrid';
import { RollingStock } from '../../models/RollingStock';

export const RollingStockPage = () => {
  const { rollingStock, isLoading } = useRollingStockData();

  const rollingStockList: RollingStock[] = rollingStock.map(
    (carState) => new RollingStock(carState),
  );
  return (
    <>
      <div>This is the rolling stock page</div>
      <RollingStockProvider>
        <RollingStockGrid rollingStockList={rollingStockList} />
      </RollingStockProvider>
    </>
  );
};
