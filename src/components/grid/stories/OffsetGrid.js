import React from 'react';
import Grid from 'components/grid/Grid.js';
import Paper from 'components/paper/Paper.js';

const offsetGrid = (props) => {
    return (
        <Paper className="fill-container">
            <Grid container className="grid-example">
                <Grid row>
                    <Grid col xs="4" offsetSm="4"><Paper className="textc">xs=4 offsetSm=4</Paper></Grid>
                    <Grid col xs="6" offsetSm="6"><Paper className="textc">xs=4 offsetSm=6</Paper></Grid>
                    <Grid col xs="2"><Paper className="textc">xs=2</Paper></Grid>
                    <Grid col xs="4" offsetSm="6"><Paper className="textc">xs=4 offsetSm=6</Paper></Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default offsetGrid;