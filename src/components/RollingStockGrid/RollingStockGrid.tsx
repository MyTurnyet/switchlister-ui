import { RollingStock } from '../../models/RollingStock';
import { useRollingStockData } from '../../data/RollingStockContext';
import styled from '@emotion/styled';

function RollingStockDetails(props: { car: RollingStock }) {
  return (
    <CarContainer>
      <CarHeader>{props.car.carType}</CarHeader>
      <CarDisplayName>{props.car.displayName}</CarDisplayName>
    </CarContainer>
  );
}

export const RollingStockGrid = () => {
  const { rollingStock, isLoading } = useRollingStockData();

  return (
    <>
      A bunch of cars got here:
      {isLoading && <div>Loading!</div>}
      {!isLoading && (
        <GridContainer>
          {rollingStock.map((car: RollingStock) => {
            return <RollingStockDetails key={car.displayName} car={car} />;
          })}
        </GridContainer>
      )}
    </>
  );
};

const GridContainer = styled.div`
  padding-top: 15px;
  padding-bottom: 35px;
  background-color: green;
  display: flex;
  justify-content: space-evenly;
`;

const CarContainer = styled.div`
  background-color: white;
  height: 10vh;
  width: 20vh;
  border: black 2px solid;
  border-radius: 8px;
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
