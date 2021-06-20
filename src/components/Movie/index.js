import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

export default function Movie({ movie, showIndividualMovie, addFavorite }) {

    return (
        <Grid item xs={12} md={3} >
            <Card className="" spacing={10} >
                <div className="imgWrapper">
                    <div className="posterWrap">
                        <img
                            className="poster"
                            src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
                            onClick={() => showIndividualMovie(movie.id)}
                            alt="poster"
                        />
                    </div>
                    <div className="favourite">
                        <IconButton aria-label="add to favorites" onClick={() => addFavorite(movie.id)}>
                            {movie.like ? <FavoriteIcon color="secondary" /> : <FavoriteBorderOutlinedIcon color="secondary" />}
                        </IconButton>
                    </div>

                </div>
                <div className="contentWrapper">

                    <h3 className="title" onClick={() => showIndividualMovie(movie.id)}>{movie.title}</h3>
                    <p>{new Date(movie.release_date).toDateString()}</p>
                </div>

            </Card>
        </Grid>


    )
}
