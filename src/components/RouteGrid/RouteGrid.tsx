import { RouteCard } from './RouteCard';
import { useTrainsData } from '../../data/TrainsContext';
import styled from 'styled-components';

export const RouteGrid = () => {
  const { trainCollection } = useTrainsData();

  return (
    <div>
      <RouteGridHeader>All Train Routes</RouteGridHeader>
      <RouteCardGrid>
        {trainCollection.map((train) => {
          return <RouteCard key={train.id} train={train} />;
        })}
      </RouteCardGrid>
    </div>
  );
};

const RouteGridHeader = styled.div`
  color: ${(props) => props.theme.colors.text.header};
  font-size: large;
  font-weight: bold;
`;
const RouteCardGrid = styled.div`
  padding-top: 15px;
  padding-bottom: 35px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  min-height: 85vh;
  min-width: 90vw;
`;
