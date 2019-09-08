import React from "react";
import styled from "styled-components/macro";
import { StyledLink } from "../styles-lib/global.styles";

const Menu = () => (
  <Box>
    <Nav>
      <ContentBox>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/store">Store</StyledLink>
        </li>
        <li>
          <StyledLink to="/users">Users</StyledLink>
        </li>
      </ContentBox>
    </Nav>
    <Cart>
      <li>
        <StyledLink to="/purchase">My cart</StyledLink>
      </li>
      <li>
        <StyledLink to="/purchase">
          <i className="fas fa-shopping-cart"></i>
        </StyledLink>
      </li>
    </Cart>
  </Box>
);

export default Menu;	

const Nav = styled.ul`
  display: flex;
  flex: 1;
  list-style-type: none;
  font-family: "Yanone Kaffeesatz";
  font-weight: 400;
  font-size: 2.8rem;
  width: 30rem;
  justify-content: flex-start;
`;

const Cart = styled.ul`
  // border: red solid 2px;
  flex-basis: 13%;
  display: flex;
  list-style-type: none;
  font-family: "Yanone Kaffeesatz";
  font-weight: 400;
  font-size: 2.8rem;
  width: 30rem;
  justify-content: space-around;
`;

const Box = styled.div`
  display: flex;
  flex: 1;
`;

const ContentBox = styled.div`
  // border: green solid 2px;
  display: flex;
  flex-basis: 50%;
  justify-content: space-around;
`;
