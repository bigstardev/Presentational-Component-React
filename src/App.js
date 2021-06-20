
import React, { useReducer, useEffect } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { fetchMovies } from "./components/FetchMovies";
import { initialState, reducer } from './store/reducer';
import MovieList from './components/MovieList';
import IndividualMovie from './components/IndividualMovie'

import LikeMovies from './components/LikeMovies'
import './App.css'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetchMovies().then(jsonResponse => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: jsonResponse.results
      });
    });
  }, []);

  const { loading, errorMessage, movies, selected } = state

  const showIndividualMovie = (id) => {

    movies.map((individual) => {
      if (individual.id === id)
        dispatch({
          type: "SELECT_INDIVIDUAL_MOVIE",
          payload: individual
        })
    })
  }

  const closeIndividualMovie = () => {

    dispatch({
      type: "CLOSE_INDIVIDUAL_MOVIE",
    })
  }

  const addFavorite = (id) => {
    movies.map((individual) => {
      if (individual.id === id) individual.like = !individual.like
      dispatch({
        type: "ADD_FAVOURITE",
        payload: movies
      })
    })
  }

  return (

    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">

            {selected === null ? <MovieList loading={loading} errorMessage={errorMessage} movies={movies} showIndividualMovie={showIndividualMovie} addFavorite={addFavorite} /> :
              <IndividualMovie content={selected} closeThis={closeIndividualMovie} />}
          </Route>
          <Route exact path="/favourite">

            <LikeMovies favouriteList={movies} addFavorite={addFavorite} showIndividualMovie={showIndividualMovie} />
          </Route>
        </Switch>
      </Router>
    </div>

  );

}

export default App;