import React from "react";
import styled from "styled-components";

const Movie = ({ chosenMovie, isLong }) => {
  const { name, overview, image, price, amount=0 } = chosenMovie;
  return (
    <div>
      {name && (
        <Box>
          {image.length > 0 ? <Image src={image} /> : ""}
          <TextsBox>
            <Title>{name}</Title>
            <Msg>{overview}</Msg>
            {isLong ? <button>Read more</button> : ""}
            <Price>Price: {price}</Price>
            {amount > 0 ? <h3>Amount: {amount}</h3> : ""}
          </TextsBox>
        </Box>
      )}
    </div>
  );
};
export default Movie;

const Image = styled.img`
  height: 15rem;
  width: 15rem;
  background-color: darksalmon;
  transition: box-shadow 150ms, margin 150ms, padding 150ms;
`;
const Msg = styled.p`
  font-family: "Raleway";
  font-size: 1.4rem;
  max-width: 35rem;
  color: slategray;
`;

const Title = styled.h1`
  color: slategray;
  font-family: "Expletus Sans";
  text-align: left;
  font-size: 2.8rem;
`;

const Price = styled.h1`
  color: black;
  font-family: "Expletus Sans";
  text-align: left;
  font-size: 1.5rem;
`;

const TextsBox = styled.div`
  padding-left: 2.8rem;
`;
const Box = styled.div`
  padding: 2rem 2.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background: paleturquoise;
    ${Image} {
      box-shadow: 0 0.4rem 1.5rem DimGrey;
      margin-bottom: 3rem;
      padding-bottom: 1rem;
    }
  }
  &:active {
    background: skyblue;
    color: white;
  }
`;
