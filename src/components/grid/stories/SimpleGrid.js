import React, {useState} from 'react';
import Grid from 'components/grid/Grid.js';
import Paper from  'components/paper/Paper.js';

const SimpleGrid = function(props){
    const [boxOpen, setBoxOpen] = useState(false);

    return (
        <Paper className="fill-container fill-container--bottom-spacing">
            <Grid container className="grid-example">
                <Grid row>
                    <Grid col xs="4"><Paper className="textc">xs=4</Paper></Grid>
                    <Grid col xs="4"><Paper className="textc">xs=4</Paper></Grid>
                    <Grid col xs="4"><Paper className="textc">xs=4</Paper></Grid>
                    <Grid col xs="3"><Paper className="textc">xs=3</Paper></Grid>
                    <Grid col xs="9"><Paper className="textc">xs=9</Paper></Grid>
                    <Grid col xs="12"><Paper className="textc">xs=12</Paper></Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default SimpleGrid;

