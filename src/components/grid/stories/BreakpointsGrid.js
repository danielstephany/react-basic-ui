import React from 'react';
import Grid from 'components/grid/Grid.js';
import Paper from  'components/paper/Paper.js'; 

const BreakpointsGrid = function(props){
    return (
        <Paper className="fill-container">
            <Grid container stretch className="grid-example">
                <Grid row>
                    <Grid col xs="4" md="3"><Paper className="textc">xs=4 md=3</Paper></Grid>
                    <Grid col xs="4" md="3"><Paper className="textc">xs=4 md=3</Paper></Grid>
                    <Grid col xs="4" md="3"><Paper className="textc">xs=4 md=3</Paper></Grid>
                    <Grid col xs="6" md="3"><Paper className="textc">xs=3 md=3</Paper></Grid>
                    <Grid col xs="6" md="12"><Paper className="textc">xs=9 md=12</Paper></Grid>
                    <Grid col xs="12"><Paper className="textc">xs=12</Paper></Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default BreakpointsGrid;

