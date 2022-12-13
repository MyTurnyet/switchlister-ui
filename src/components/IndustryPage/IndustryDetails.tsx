import React from 'react';
import { Industry } from '../../models/Industry';
import useCollapse from 'react-collapsed';
import styled from 'styled-components';

interface ExpandedProps {
  readonly isExpanded: boolean;
}

export const IndustryDetails = (props: { industry: Industry }) => {
  const { getToggleProps, getCollapseProps, isExpanded } = useCollapse();
  const carTypes = props.industry.servicedCarTypes;
  return (
    <IndustryDetailsContainer isExpanded={isExpanded}>
      <IndustryNameExpander {...getToggleProps()} isExpanded={isExpanded}>
        {props.industry.name}
      </IndustryNameExpander>
      <div {...getCollapseProps()}>
        <div>Car types accepted at this industry:</div>
        {carTypes.map((carType) => (
          <div key={carType.toString()}>{carType.toString()}</div>
        ))}
      </div>
    </IndustryDetailsContainer>
  );
};
const IndustryNameExpander = styled.div<ExpandedProps>`
  cursor: pointer;
  font-weight: bold;
  font-size: medium;
  ${(props) => {
    return (
      props.isExpanded &&
      `border-bottom: ${props.theme.colors.cardBorder} 2px solid;         
            `
    );
  }}
`;
const IndustryDetailsContainer = styled.div<ExpandedProps>`
  margin-top: 2px;
  margin-bottom: 4px;
  width: 50%;
`;
