import { RouteCard } from './RouteCard';
import styled from 'styled-components';
import { useTrainRoutesData } from '../../data/TrainRoutesContext';
import { TrainRoute } from '../../models/TrainRoute';
import { useNavigate } from 'react-router';

export const RouteGrid = () => {
  const { trainRoutes } = useTrainRoutesData();
  const navigate = useNavigate();
  const handleRouteClick = (routeClicked: TrainRoute) => {
    navigate(`routes/${routeClicked.id}`);
  };

  return (
    <div>
      <RouteDisplayHeader>All Train Routes</RouteDisplayHeader>
      <RouteCardGrid>
        {trainRoutes.map((route: TrainRoute) => {
          return <RouteCard key={route.id} route={route} handlePress={handleRouteClick} />;
        })}
      </RouteCardGrid>
    </div>
  );
};

export const RouteDisplayHeader = styled.div`
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
