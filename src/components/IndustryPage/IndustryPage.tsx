import { Industry } from '../../models/Industry';

export const IndustryPage = (props: { industry: Industry }) => {
  return (
    <div>
      <div>{props.industry.name}</div>
    </div>
  );
};
