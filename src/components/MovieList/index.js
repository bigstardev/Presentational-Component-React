import React from 'react'
import Movie from '../Movie'
import Header from '../Header'
import Grid from '@material-ui/core/Grid'



export default function MovieList({ loading, errorMessage, movies, showIndividualMovie, addFavorite }) {


    const retrievedMovies =
        loading && !errorMessage ? (
            <div>Loading</div>
        ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
        ) : (
            movies.map((movie, index) => (
                <Movie key={`${index}-${movie.title}`} movie={movie} showIndividualMovie={showIndividualMovie} addFavorite={addFavorite} />
            ))
        );

    return (
        <div >
            <Header content="Popular movie" />
            <Grid container justify='center' spacing={3}>
                {retrievedMovies}
            </Grid>
        </div>
    )
}
