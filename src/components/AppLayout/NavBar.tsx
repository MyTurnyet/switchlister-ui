import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLink to={'/home'} title={'Home'}>
        Home
      </NavLink>
      <NavLink to={'/rollingstock'} title={'Rolling Stock'}>
        Rolling Stock
      </NavLink>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  margin-top: 10px;
  background: deepskyblue;
  a {
    text-decoration: none;
    display: block;
    padding: 1em;
    color: white;
  }

  a:hover {
    background: #1565c0;
  }
`;
