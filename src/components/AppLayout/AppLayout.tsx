import React from 'react';
import { Outlet } from 'react-router';
import styled from '@emotion/styled';
import { NavBar } from './NavBar';

export const AppLayout = () => {
  return (
    <div>
      <LayoutHeader>
        <AppHeader>SwitchLister</AppHeader>
        <NavBar />
      </LayoutHeader>
      <ContentArea title={'content'}>
        {/* <DataContext>*/}
        {/*  <StoryInformationView />*/}
        {/* </DataContext>*/}
        <PageView title={'pageView'}>
          <Outlet></Outlet>
        </PageView>
      </ContentArea>
    </div>
  );
};

const LayoutHeader = styled.div`
  text-align: center;
  background-color: white;
  height: auto;
  width: 100vw;
  justify-content: center;
  border-bottom: #1565c0 3px solid;
`;
const AppHeader = styled.div`
  color: #1565c0;
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
