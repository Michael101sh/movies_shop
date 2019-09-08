import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "../styles-lib/global.styles";
import movies_json from "./../movies";
import TopBar from "./TopBar";
import Menu from "./Menu";
import HomePage from "./Home";
import StorePage from "./Store";
import NoMatch from "./NoMatch";
import ProductPage from "./Product";
import PurchasePage from "./Purchase";
import UsersPage from "./UsersTable";
import { fetchData } from "../services/User.service";

const MOVIE_DB_API_KEY = "fc037c12de9bbffaf98b6b88316616ec";

const App = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [chosenMovie, setChosenMovie] = useState({});
  const [users, setUsers] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const moviesQueries = dataProcessing();
    buildDataStore(moviesQueries, setMoviesData);
  }, []);

  return (
    <Router>
      <Box>
        <TopBar>
          <Menu />
        </TopBar>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route
            path="/store"
            render={() => (
              <StorePage moviesData={moviesData} pick={setChosenMovie} />
            )}
          />
          <Route
            path="/product/id=:productId"
            render={() => (
              <ProductPage
                chosenMovie={chosenMovie}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            )}
          />
          <Route
            path="/users"
            render={() => <UsersPage users={users} updateUsers={setUsers} />}
          />
          <Route
            path="/purchase"
            render={() => (
              <PurchasePage cartItems={cartItems} updateUsers={setUsers} />
            )}
          />
          <Route component={NoMatch} />
        </Switch>
        <GlobalStyles />
      </Box>
    </Router>
  );
};

export default App;

const dataProcessing = () => {
  let moviesQueries = [];
  for (const movie of movies_json) {
    let movieName = movie.name;
    let nameWords = movieName.split(/[\s,]+/);
    if (nameWords.includes("The")) {
      let index = nameWords.indexOf("The");
      nameWords.splice(index);
    }
    if (nameWords.includes("&")) {
      let index = nameWords.indexOf("&");
      nameWords.splice(index);
    }
    if (nameWords.includes("-")) {
      let index = nameWords.indexOf("-");
      nameWords.splice(index);
    }
    let startIndex = -1;
    let endIndex = -1;
    for (let i = 0; i < nameWords.length; i++) {
      if (nameWords[i].includes("("))
        if (nameWords[i].includes("(")) {
          startIndex = i;
        }
      if (nameWords[i].includes(")")) {
        endIndex = i;
      }
    }
    if (startIndex !== -1 && endIndex !== -1) {
      nameWords[startIndex] = nameWords[startIndex].substr(1);
      nameWords[endIndex] = nameWords[endIndex].slice(0, -1);
      nameWords = nameWords.slice(startIndex, endIndex + 1);
    }
    let query = "";
    for (const word of nameWords) {
      query += word + "+";
    }
    query = query.slice(0, -1);
    moviesQueries.push({ id: movie.id, query: query });
  }
  return moviesQueries;
};

async function buildDataStore(moviesQueries, setMoviesData) {
  try {
    const serachBaseUrl = "https://api.themoviedb.org/3/search/movie?";
    let imagesUrls = [];
    for (const item of moviesQueries) {
      const movieQuery = item.query;
      let searchUrl = `${serachBaseUrl}api_key=${MOVIE_DB_API_KEY}&query=${movieQuery}`;
      const data = await fetchData(searchUrl);
      if (data !== undefined) {
        if (data.results.length > 0) {
          const movie = data.results[0];
          const imgPath = movie.poster_path;
          const overview = movie.overview;
          const name = movie.original_title;
          let movie_data = movies_json.find(x => x.id === item.id);
          const imgBaseUrl = "https://image.tmdb.org/t/p/w154";
          const imgUrl = imgBaseUrl + imgPath;
          imagesUrls.push(imgUrl);
          movie_data.name = name;
          movie_data.image = imgUrl;
          movie_data.overview = overview;
        }
      }
    }
    let moviesArr = [];
    for (const movie of movies_json) {
      // check whether the movie found in 'themoviedb.org'
      if (movie.overview !== null) {
        moviesArr.push(movie);
      }
    }
    setMoviesData(moviesArr);
  } catch (err) {
    // console.log(err);
  }
}

const Box = styled.div`
  height: 100%;
`;
