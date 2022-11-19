import { RollingStock } from '../../models/RollingStock';

export const RollingStockGrid = (props: { rollingStockList: RollingStock[] }) => {
  return (
    <>
      {props.rollingStockList.map((car: RollingStock) => (
        <div key={car.displayName}>{car.displayName}</div>
      ))}
    </>
  );
};
