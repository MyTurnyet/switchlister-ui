import { RollingStock } from '../../models/RollingStock';
import { useRollingStockData } from '../../data/RollingStockContext';
import styled from 'styled-components';
import { useEffect } from 'react';

function RollingStockDetails(props: { car: RollingStock }) {
  return (
    <CarContainer>
      <CarHeader>{props.car.carType}</CarHeader>
      <CarDisplayName>{props.car.displayName}</CarDisplayName>
    </CarContainer>
  );
}

export const RollingStockGrid = () => {
  const { rollingStock, isLoading, getRollingStock } = useRollingStockData();

  useEffect(() => {
    if (rollingStock.isEmpty()) {
      getRollingStock();
    }
  }, []);

  return (
    <div>
      A bunch of cars got here:
      {isLoading && <div>Loading!</div>}
      {!isLoading && (
        <GridContainer>
          {rollingStock.map((car: RollingStock) => {
            return <RollingStockDetails key={car.displayName} car={car} />;
          })}
        </GridContainer>
      )}
    </div>
  );
};

const GridContainer = styled.div`
  padding-top: 15px;
  padding-bottom: 35px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  min-height: 85vh;
  min-width: 90vw;
`;

const CarContainer = styled.div`
  background-color: white;
  color: darkgreen;
  height: 10vh;
  width: 20vh;
  border: black 2px solid;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: auto;
`;
const CarHeader = styled.div`
  border-bottom: black 2px solid;
  padding-bottom: 10px;
  padding-top: 5px;
  padding-left: 5px;
`;
const CarDisplayName = styled.div`
  padding-bottom: 10px;
  padding-top: 5px;
  padding-left: 5px;
`;
