import { RouteCard } from './RouteCard';
import styled from 'styled-components';
import { useRoutesData } from '../../data/RoutesContext';
import { Route } from '../../models/Route';

export const RouteGrid = () => {
  const { routes } = useRoutesData();

  return (
    <div>
      <RouteGridHeader>All Train Routes</RouteGridHeader>
      <RouteCardGrid>
        {routes.map((route: Route) => {
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
