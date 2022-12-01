import { RollingStock } from '../../models/RollingStock';
import { useRollingStockData } from '../../data/RollingStockContext';

export const RollingStockGrid = () => {
  const { rollingStock, isLoading } = useRollingStockData();

  return (
    <>
      A bunch of cars got here:
      {isLoading && <div>Loading!</div>}
      {!isLoading &&
        rollingStock.map((car: RollingStock) => <div key={car.displayName}>{car.displayName}</div>)}
    </>
  );
};
