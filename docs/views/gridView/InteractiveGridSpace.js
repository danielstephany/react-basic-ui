import React, {useState} from 'react';
import Grid from 'components/grid/Grid.js';
import Paper from  'components/paper/Paper.js';
import Form from 'components/form/Form.js';
import BaseRadio from 'components/baseRadio/BaseRadio.js';

const InteractiveGridSpace = () => {
    const [spacingInput, setSpacingInput] = useState('8');
    const [spacing, setSpacing] = useState(spacing);

    function setit(e){
        setSpacing(e.target.value);
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
                                <Form onSubmit={setit}>
                                    {/* <input type="number" min="0" max="10" value={spacingInput} onChange={(e)=> {setSpacingInput(e.target.value)}}/> */}
                                    <BaseRadio onChange={setit} value="0" label="0" name="test" />
                                    <BaseRadio onChange={setit} value="1" label="1" name="test" />
                                    <BaseRadio onChange={setit} value="2" label="2" name="test" />
                                    <BaseRadio onChange={setit} value="3" label="3" name="test" />
                                    <BaseRadio onChange={setit} value="4" label="4" name="test" />
                                    <BaseRadio onChange={setit} value="5" label="5" name="test" />
                                    <BaseRadio onChange={setit} value="6" label="6" name="test" />
                                    <BaseRadio onChange={setit} value="7" label="7" name="test" />
                                    <BaseRadio onChange={setit} value="8" label="8" name="test" />
                                    <BaseRadio onChange={setit} value="9" label="9" name="test" />
                                    <BaseRadio onChange={setit} value="10" label="10" name="test" />
                                    <BaseRadio onChange={setit} value="" label="Default" name="test" labelLeft/>
                                </Form>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default InteractiveGridSpace;