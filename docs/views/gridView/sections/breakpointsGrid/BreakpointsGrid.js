import React, {useState} from 'react';
import Grid from 'components/grid/Grid.js';
import Paper from  'components/paper/Paper.js';
import CollapseBox from 'components/collapseBox/CollapseBox.js';
import Highlight from 'react-highlight'
import breakpointsGridTxt from './breakpointsGrid.txt';
import TitleToggle from '../../../../components/titleToggle/TitleToggle';

const BreakpointsGrid = function(props){
    const [boxOpen, setBoxOpen] = useState(false);
    return (
        <React.Fragment>
            <TitleToggle toggleEvent={() => { setBoxOpen(!boxOpen) }} >Grid with breakpoints</TitleToggle>
            <CollapseBox open={boxOpen}>
                <div className="code-container">
                    <Highlight>{breakpointsGridTxt}</Highlight>
                </div>
            </CollapseBox>
            <div className="fill-container">
                <Grid container className="grid-example">
                    <Grid row>
                        <Grid col xs="4" md="3"><Paper className="textc">xs=4 md=3</Paper></Grid>
                        <Grid col xs="4" md="3"><Paper className="textc">xs=4 md=3</Paper></Grid>
                        <Grid col xs="4" md="3"><Paper className="textc">xs=4 md=3</Paper></Grid>
                        <Grid col xs="6" md="3"><Paper className="textc">xs=3 md=3</Paper></Grid>
                        <Grid col xs="6" md="12"><Paper className="textc">xs=9 md=12</Paper></Grid>
                        <Grid col xs="12"><Paper className="textc">xs=12</Paper></Grid>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
};

export default BreakpointsGrid;

