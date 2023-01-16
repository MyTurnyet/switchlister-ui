import { RouteCard } from './RouteCard';
import styled from 'styled-components';
import { useTrainRoutesData } from '../../data/TrainRoutesContext';
import { TrainRoute } from '../../models/TrainRoute';

export const RouteGrid = () => {
  const { trainRoutes } = useTrainRoutesData();

  return (
    <div>
      <RouteGridHeader>All Train Routes</RouteGridHeader>
      <RouteCardGrid>
        {trainRoutes.map((route: TrainRoute) => {
          return <RouteCard key={route.id} route={route} />;
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
