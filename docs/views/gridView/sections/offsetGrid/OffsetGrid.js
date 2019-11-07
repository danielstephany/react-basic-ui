import React, {useState} from 'react';
import Grid from 'components/grid/Grid.js';
import Paper from 'components/paper/Paper.js';
import CollapseBox from 'components/collapseBox/CollapseBox.js';
import Highlight from 'react-highlight'
import offsetGridTxt from './offsetGrid.txt';
import TitleToggle from '../../../../components/titleToggle/TitleToggle';

const offsetGrid = (props) => {
    const[boxOpen, setBoxOpen] = useState(false);
    return (
        <React.Fragment>
            <h3>Grid with column offsets</h3>
            <p>Columns can be shifted over by using the provided offset properties</p>
            <TitleToggle toggleEvent={() => { setBoxOpen(!boxOpen) }} >Grid with column offset exampls</TitleToggle>
            <CollapseBox open={boxOpen}>
                <div className="code-container">
                    <Highlight>{offsetGridTxt}</Highlight>
                </div>
            </CollapseBox>
            <div className="fill-container">
                <Grid container className="grid-example">
                    <Grid row>
                        <Grid col xs="4" offsetSm="4"><Paper className="textc">xs=4 offsetSm=4</Paper></Grid>
                        <Grid col xs="6" offsetSm="6"><Paper className="textc">xs=4 offsetSm=6</Paper></Grid>
                        <Grid col xs="2"><Paper className="textc">xs=2</Paper></Grid>
                        <Grid col xs="4" offsetSm="6"><Paper className="textc">xs=4 offsetSm=6</Paper></Grid>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default offsetGrid;