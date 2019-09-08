import React from "react";
import styled from "styled-components/macro";

const Home = () => {

  return (
    <Box>
      <Title>Movies store</Title>
      <ImageBox>
        <img
          src="./movie_background.png"
          alt="avatar"
        />
      </ImageBox>
    </Box>
  );
};

export default Home;

const Box = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: deeppink;
  font-size: 7rem;
  font-weight: normal;
  font-family: "Griffy", cursive;
  text-align: center;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 1000px;
  }
`;