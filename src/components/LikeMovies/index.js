import React from 'react'
import Movie from '../Movie'
import Header from '../Header'
import { Grid } from '@material-ui/core';
export default function LikeMovies({ favouriteList, addFavorite, showIndividualMovie }) {

    let favourites = favouriteList.filter(fav => fav.like === true);


    favourites = favourites.length > 0 ? favourites.map((movie, index) =>
        <Movie key={`${index}-${movie.title}`} movie={movie} addFavorite={addFavorite} showIndividualMovie={showIndividualMovie} />

    ) : <h3>You don't have any favourite Movie!</h3>



    return (
        <>
            <Header />
            <Grid container justify='center' spacing={3}>
                {favourites}
            </Grid>
        </>
    )
}
