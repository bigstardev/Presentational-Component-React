import React from 'react'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button';
export default function IndividualMovie({ content, closeThis }) {
    return (
        <div>
            <h1 className="title">{content.title}</h1>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <img className="individual-poster" src={`https://image.tmdb.org/t/p/w500` + content.poster_path} alt="poster" />
                </Grid>
                <Grid item md={1}>
                </Grid>
                <Grid item xs={12} md={7}>
                    <div>
                        <h3>Overview</h3>
                        <p>{content.overview}</p>
                    </div>
                    <div>
                        <h3>Overview</h3>
                        <p>{content.overview}</p>
                    </div>
                </Grid>
            </Grid>
            <Button variant="contained" color="secondary" onClick={() => closeThis()}>
                Close
            </Button>

        </div>
    )
}
