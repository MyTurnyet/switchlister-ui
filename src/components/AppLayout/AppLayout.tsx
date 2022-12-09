import React, { PropsWithChildren } from 'react';
import { Outlet } from 'react-router';
import styled from '@emotion/styled';

export const AppLayout = (props: PropsWithChildren) => {
  return (
    <div>
      <LayoutContainer>
        <AppHeader>SwitchLister</AppHeader>
        {/* <NavBar></NavBar>*/}
      </LayoutContainer>
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

const LayoutContainer = styled.div`
  text-align: center;
  height: 12vh;
  width: 100vw;
  justify-content: center;
  border-bottom: #1565c0 3px solid;
`;
const AppHeader = styled.div`
  font-size: calc(10px + 2vmin);
  margin: 12px 8px 4px 0;
`;
const ContentArea = styled.div`
  display: flex;
  height: 86vh;
  flex-direction: row;
`;
const PageView = styled.div`
  flex: 5;
`;
