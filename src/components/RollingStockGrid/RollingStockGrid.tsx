import { RollingStock } from '../../models/RollingStock';
import { useRollingStockData } from '../../data/RollingStockContext';

export const RollingStockGrid = (props: { rollingStockList: RollingStock[] }) => {
  const { rollingStock, isLoading } = useRollingStockData();

  const rollingStockList: RollingStock[] = rollingStock.map(
    (carState) => new RollingStock(carState),
  );
  console.log(rollingStockList);
  return (
    <>
      A bunch of cars got here:
      {isLoading && <div>Loading!</div>}
      {!isLoading &&
        rollingStockList.map((car: RollingStock) => (
          <div key={car.displayName}>{car.displayName}</div>
        ))}
    </>
  );
};
