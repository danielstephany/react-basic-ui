import React, {useState} from 'react';
import Grid from 'components/grid/Grid.js';
import Paper from  'components/paper/Paper.js';
import Form from 'components/form/Form.js';

const InteractiveGridSpace = () => {
    const [spacingInput, setSpacingInput] = useState('8');
    const [spacing, setSpacing] = useState(spacing);

    function setit(e){
        e.preventDefault();
        setSpacing(spacingInput);
    }

    return (
        <React.Fragment>
            <h3>Adjustable gutters</h3>
            <p>The padding of the collumns can be increased or decrease by passing a value to the <strong>spacing</strong> prop.</p>
            <div className="fill-container">
                <Grid container className="grid-example">
                    <Grid row spacing={spacing}>
                        <Grid col xs="4"><Paper className="textc">xs=4</Paper></Grid>
                        <Grid col xs="4"><Paper className="textc">xs=4</Paper></Grid>
                        <Grid col xs="4"><Paper className="textc">xs=4</Paper></Grid>
                        <Grid col xs="3"><Paper className="textc">xs=3</Paper></Grid>
                        <Grid col xs="9"><Paper className="textc">xs=9</Paper></Grid>
                        <Grid col xs="12"><Paper className="textc">xs=12</Paper></Grid>
                    </Grid>
                </Grid>
                <Grid container className="grid-example">
                    <Grid row>
                        <Grid col xs="12">
                            <Paper className="textc">
                                <form onSubmit={setit}>
                                    <input type="number" min="0" max="10" value={spacingInput} onChange={(e)=> {setSpacingInput(e.target.value)}}/>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default InteractiveGridSpace;