import React, {useState} from 'react';
import Grid from 'components/grid/Grid.js';
import Paper from  'components/paper/Paper.js';
import CollapseBox from 'components/collapseBox/CollapseBox.js';
import Highlight from 'react-highlight'
import gridtxt from './grid.txt';
import TitleToggle from '../../../../components/titleToggle/TitleToggle';

const SimpleGrid = function(props){
    const [boxOpen, setBoxOpen] = useState(false);

    return (
        <React.Fragment>
            <h3>Simple grid layout without breakpoints</h3>
            <p>To Produce a simple responsive grid that maintains the same layout across all screen sizes pass only the <strong>xs</strong> prop to the columns with the desired value.</p>
            <TitleToggle toggleEvent={() => { setBoxOpen(!boxOpen) }} >Simple grid example</TitleToggle>
            <CollapseBox open={boxOpen}>
                <div className="code-container">
                    <Highlight >
                        {gridtxt}
                    </Highlight>
                </div>
            </CollapseBox>
            <div className="fill-container fill-container--bottom-spacing">
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
            </div>
        </React.Fragment>
    );
};

export default SimpleGrid;

