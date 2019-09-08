import React from "react";
import styled, { keyframes } from "styled-components/macro";

const TopBar = ({ children }) => (
  <Box>
      <Text>{children}</Text>
      <Logo src="./logo192.png" alt="logo" />
  </Box>
);

export default TopBar;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Logo = styled.img`
  height: 5rem;
  animation: ${spin} 2s linear infinite;
`;
const Text = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 3rem;
  font-weight: normal;
  font-family: "Griffy", cursive;
  color: papayawhip;
  cursor: pointer;
  user-select: none;
  position: relative;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  background: #ff7575;
  width: 100%;
  height: 70px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;
