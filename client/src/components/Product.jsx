import React from "react";
import Movie from "./Movie";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Product = ({ chosenMovie, cartItems, setCartItems }) => {
  const addToCart = movie => {
    let movieCopy = { ...movie };
    const movieId = movieCopy.id;
    movieCopy.amount = 1;
    const Ids = cartItems.map(item => item.id);
    let newCart = [];
    movieCopy.overview = "";
    movieCopy.image = "";
    if (Ids.includes(movieId)) {
      let item = cartItems.find(x => x.id === movieId);
      item.amount++;
      movieCopy.amount = item.amount;
      for (const elem of cartItems) {
        if (elem.id !== movieId) {
          newCart.push(elem);
        }
      }
      newCart.push(movieCopy);
    } else {
      newCart = [...cartItems, movieCopy];
    }
    setCartItems(newCart);
    alert("Movie added to cart");
  };

  return (
    <Box>
      <MovieBox>
        <Movie chosenMovie={chosenMovie}></Movie>
      </MovieBox>
      <Buy>
        <Button type="button" onClick={() => addToCart(chosenMovie)}>
          Add to Cart
        </Button>
        <StyledLink to="/purchase">
          <Button type="button">
            Buy Now
          </Button>
        </StyledLink>
      </Buy>
      <H1>
        <StyledLink to="/store"> Back to store </StyledLink>
      </H1>
    </Box>
  );
};

export default Product;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const MovieBox = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 100%;
`;
const Buy = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: space-around;
`;
const Button = styled.button`
  outline-style: none;
  border-style: none;
  background: #ff7575;
  text-transform: uppercase;
  color: white;
  font-size: 2.8rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-family: "Yanone Kaffeesatz", sans-serif;
  &:hover {
    background: #ff9999;
  }
  &:active {
    background: fuchsia;
  }
`;

const H1 = styled.h1`
  color: slategray;
  font-family: "Expletus Sans";
  text-align: center;
  flex-basis: 100%;
  margin-top: 1rem;
`;

const StyledLink = styled(Link)`
  font-family: "Griffy", cursive;
  text-align: center;
  color: skyblue;
  background: Cornsilk;
  font-size: 3.2rem;
`;
