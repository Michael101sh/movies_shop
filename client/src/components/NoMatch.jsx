import React from "react";
import styled from "styled-components/macro";

const NoMatch = () => {
  return <Title>404 - No such route...</Title>;
};

export default NoMatch;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: normal;
  font-family: "Griffy", cursive;
  text-align: center;
  color: mintcream;
`;
