import React, { PropsWithChildren } from 'react';
import { Outlet } from 'react-router';

export const AppLayout = (props: PropsWithChildren) => {
  return (
    <div>
      <div>
        <div>SwitchLister</div>
        {/* <NavBar></NavBar>*/}
      </div>
      <div title={'content'}>
        {/* <DataContext>*/}
        {/*  <StoryInformationView />*/}
        {/* </DataContext>*/}
        <div title={'pageView'}>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};
