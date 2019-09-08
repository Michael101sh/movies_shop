import React from "react";
import styled from "styled-components";
import Movie from "./Movie";
import { StyledLink } from "../styles-lib/global.styles";

const MoviesList = ({
  listData,
  isStore = false,
  pick = () => {},
  height = "95rem"
}) => {
  return (
    <Box height={height}>
      <ul>
        {listData.map(item => (
          <MovieItem key={item.id} onClick={() => pick(item)}>
            {isStore ? (
              <div>
                {item.overview.length > 350 ? (
                  <StyledLink to={`/product/id=${item.id}`}>
                    <Movie
                      chosenMovie={{
                        name: item.name,
                        overview: item.overview.slice(0, 350),
                        image: item.image,
                        price: item.price
                      }}
                      isLong={true}
                    />
                  </StyledLink>
                ) : (
                  <StyledLink to={`/product/id=${item.id}`}>
                    <Movie chosenMovie={item} />
                  </StyledLink>
                )}
              </div>
            ) : (
              <div>
                {item.overview.length > 350 ? (
                  <Movie
                    chosenMovie={{
                      name: item.name,
                      overview: item.overview.slice(0, 350),
                      image: item.image,
                      price: item.price
                    }}
                    isLong={true}
                  />
                ) : (
                  <Movie chosenMovie={item} />
                )}
              </div>
            )}
          </MovieItem>
        ))}
      </ul>
    </Box>
  );
};

export default MoviesList;

const Box = styled.div`
  background: oldlace;
  height: ${props => props.height}
  min-width: 56rem;
  border-radius: 0.4rem;
  overflow-x: hidden;
  overflow-y: scroll;
  box-shadow: 0 0.2rem 0.8rem DimGrey;
`;
const MovieItem = styled.li`
  &:nth-child(even) {
    background: honeydew;
  }
  &:nth-child(odd) {
    background: white;
  }
`;
