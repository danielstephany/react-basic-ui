import React from "react";
import Grid from "components/grid/Grid.js";
import Paper from "components/paper/Paper.js";

const autoGrid = function(props) {
  return (
    <Paper className="fill-container">
      <Grid container className="grid-example">
        <Grid row>
          <Grid col>
            <Paper className="textc">auto</Paper>
          </Grid>
          <Grid col>
            <Paper className="textc">auto</Paper>
          </Grid>
          <Grid col xs="4">
            <Paper className="textc">xs=4</Paper>
          </Grid>
          <Grid col>
            <Paper className="textc">auto</Paper>
          </Grid>
          <Grid col>
            <Paper className="textc">auto</Paper>
          </Grid>
        </Grid>
        <Grid row>
          <Grid col>
            <Paper className="textc">auto</Paper>
          </Grid>
          <Grid col xs="5">
            <Paper className="textc">xs=5</Paper>
          </Grid>
          <Grid col>
            <Paper className="textc">auto</Paper>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default autoGrid;
