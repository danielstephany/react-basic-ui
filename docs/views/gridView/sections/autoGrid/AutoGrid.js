import React, { useState } from 'react';
import Grid from 'components/grid/Grid.js';
import Paper from 'components/paper/Paper.js';
import CollapseBox from 'components/collapseBox/CollapseBox.js';
import Highlight from 'react-highlight'
import autoGridTxt from './autoGrid.txt';
import TitleToggle from '../../../../components/titleToggle/TitleToggle';

const autoGrid = function (props) {
    const [boxOpen, setBoxOpen] = useState(false);

    return (
        <React.Fragment>
            <h3>Automatic column widths</h3>
            <p>If a width option is not set for a column, the column will grow to the size of its content or fill the remaining space in the row if there is not enough content to fill the row.</p>
            <TitleToggle toggleEvent={() => { setBoxOpen(!boxOpen) }} >Automatic grid width example</TitleToggle>
            <CollapseBox open={boxOpen}>
                <div className="code-container">
                    <Highlight>
                        {autoGridTxt}
                    </Highlight>
                </div>
            </CollapseBox>
            <div className="fill-container">
                <Grid container className="grid-example">
                    <Grid row>
                        <Grid col ><Paper className="textc">auto</Paper></Grid>
                        <Grid col ><Paper className="textc">auto</Paper></Grid>
                        <Grid col xs="4" ><Paper className="textc">xs=4</Paper></Grid>
                        <Grid col ><Paper className="textc">auto</Paper></Grid>
                        <Grid col ><Paper className="textc">auto</Paper></Grid>
                    </Grid>
                    <Grid row>
                        <Grid col ><Paper className="textc">auto</Paper></Grid>
                        <Grid col xs="5" ><Paper className="textc">xs=5</Paper></Grid>
                        <Grid col ><Paper className="textc">auto</Paper></Grid>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
};

export default autoGrid;

