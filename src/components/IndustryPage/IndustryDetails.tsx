import React from 'react';
import { Industry } from '../../models/Industry';
import useCollapse from 'react-collapsed';

export const IndustryDetails = (props: { industry: Industry }) => {
  const { getToggleProps, getCollapseProps } = useCollapse();
  const carTypes = props.industry.servicedCarTypes;
  return (
    <div>
      <div {...getToggleProps()}>{props.industry.name}</div>
      <div {...getCollapseProps()}>
        <div>Car types accepted at this industry:</div>
        {carTypes.map((carType) => (
          <div key={carType.toString()}>{carType.toString()}</div>
        ))}
      </div>
    </div>
  );
};
