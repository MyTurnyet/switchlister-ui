import { Industry } from '../../models/Industry';
import { CarType } from '../../models/RollingStock';

export const IndustryPage = (props: { industry: Industry }) => {
  return (
    <div>
      <div>{props.industry.name}</div>
      <div>
        <div>Car types accepted at this industry:</div>
        {props.industry.servicedCarTypes.map((type: CarType) => (
          <div key={type}>{type}</div>
        ))}
      </div>
    </div>
  );
};
