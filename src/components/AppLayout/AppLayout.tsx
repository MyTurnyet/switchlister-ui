import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import { NavBar } from './NavBar';
import styled from 'styled-components';
import { useTrainsData } from '../../data/TrainsContext';

export const AppLayout = () => {
  const { trains, getTrains } = useTrainsData();

  useEffect(() => {
    if (trains.length === 0) {
      getTrains();
    }
  });
  return (
    <div>
      <LayoutHeader>
        <AppHeader>SwitchLister</AppHeader>
        <NavBar />
      </LayoutHeader>
      <ContentArea title={'content'}>
        <PageView title={'pageView'}>
          <Outlet></Outlet>
        </PageView>
      </ContentArea>
    </div>
  );
};

const LayoutHeader = styled.div`
  text-align: center;
  height: auto;
  width: 100vw;
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
  height: 86vh;
  flex-direction: row;
  margin-left: 5vw;
`;
const PageView = styled.div`
  flex: 5;
`;
