import React from 'react';
import { Industry } from '../../models/Industry';
import styled from 'styled-components';
import { RollingStock } from '../../models/RollingStock';

export const IndustryDetails = (props: { industry: Industry }) => {
  const industry = props.industry;
  const carTypes = industry.servicedCarTypes;

  function pluralizedCarCount() {
    let carCount = `${industry.maxCarCount} car`;
    if (industry.maxCarCount > 1) {
      carCount += 's';
    }
    return carCount;
  }

  return (
    <IndustryDetailsContainer>
      <IndustryNameExpander>{industry.name}</IndustryNameExpander>
      <div>Holds {pluralizedCarCount()}</div>
      <div>
        Car types accepted:&nbsp;
        {carTypes.map((carType) => carType).join(', ')}
      </div>
      <br />
      <div>
        <div>Cars at industry:</div>
        {industry.placedCars.map((car: RollingStock) => (
          <div key={car.displayName}>{car.displayName}</div>
        ))}
      </div>
    </IndustryDetailsContainer>
  );
};
const IndustryNameExpander = styled.div`
  font-weight: bold;
  font-size: medium;
  border-bottom: ${(props) => props.theme.colors.cardBorder} 2px solid;
`;
const IndustryDetailsContainer = styled.div`
  width: auto;
  height: auto;
  margin-top: 2px;
  margin-bottom: 4px;
  padding: 8px;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.cardBorder};
`;
