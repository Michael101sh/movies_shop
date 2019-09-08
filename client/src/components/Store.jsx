import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import Filter from "./Filter";
import MoviesList from "./MoviesList";

const Store = ({ moviesData, pick }) => {
  const [is_loading, setLoading] = useState(true);
  const [filtered_list, setFilteredList] = useState([]);

  useEffect(() => {
    if (moviesData.length > 0) {
      let overview = moviesData[0].overview;
      if (overview !== null) {
        setFilteredList(moviesData);
        setLoading(false);
      }
    }
  }, [moviesData]);

  return (
    <Box>
      {is_loading === false ? (
        <ContentBox>
          <Filter listData={moviesData} onFilter={setFilteredList} />
          <ListBox>
            <MoviesList listData={filtered_list} isStore={true} pick={pick} height="95rem"/>
          </ListBox>
        </ContentBox>
      ) : (
        <Title>I am Loding...</Title>
      )}
    </Box>
  );
};

export default Store;

const Box = styled.div`
  background: Cornsilk;
  box-shadow: 0 0.4rem 1.5rem DimGrey;
  position: relative;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 62rem;
  padding: 8.5rem 1.5rem 1.5rem;
`;
const ListBox = styled.div`
  display: flex;
  padding-top: 15px;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: normal;
  font-family: "Griffy", cursive;
  text-align: center;
  color: skyblue;
`;
