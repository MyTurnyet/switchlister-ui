import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import { NavBar } from './NavBar';
import styled from 'styled-components';
import { useTrainsData } from '../../data/TrainsContext';
import { useIndustryData } from '../../data/IndustriesContext';
import { useRoutesData } from '../../data/RoutesContext';

export const AppLayout = () => {
  const { trainCollection, refreshTrainsData } = useTrainsData();
  const { routes, refreshRoutesData } = useRoutesData();
  const { industries, refreshIndustriesData } = useIndustryData();
  useEffect(() => {
    if (trainCollection.isEmpty()) {
      refreshTrainsData();
    }
  });
  useEffect(() => {
    if (routes.length == 0) {
      refreshRoutesData();
    }
  });
  useEffect(() => {
    if (industries.isEmpty()) {
      refreshIndustriesData();
    }
  });
  return (
    <LayoutContainer>
      <LayoutHeader>
        <AppHeader>SwitchLister</AppHeader>
        <NavBar />
      </LayoutHeader>
      <ContentArea title={'content'}>
        <PageView title={'pageView'}>
          <Outlet></Outlet>
        </PageView>
      </ContentArea>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  height: 90vh;
  width: 99vw;
`;
const LayoutHeader = styled.div`
  text-align: center;
  height: auto;
  width: 99vw;
  justify-content: center;
  border-bottom: ${(props) => props.theme.colors.text.header} 3px solid;
`;
const AppHeader = styled.div`
  color: ${(props) => props.theme.colors.text.header};
  font-size: calc(10px + 2vmin);
  margin: 12px 8px 4px 0;
`;
const ContentArea = styled.div`
  display: flex;
  height: auto;
  flex-direction: row;
  margin-left: 5vw;
`;
const PageView = styled.div`
  flex: 5;
`;
