import React, {useState} from 'react';
import Grid from 'components/grid/Grid.js';
import Paper from  'components/paper/Paper.js';
import Form from 'components/form/Form.js';
import FieldSet from 'components/fieldSet/FieldSet.js';
import RadioButton from 'components/radioButton/RadioButton.js';
import CollapseBox from 'components/collapseBox/CollapseBox.js';
import Highlight from 'react-highlight'
import interactiveGridSpaceTxt from './interactiveGridSpace.txt';
import TitleToggle from '../../../../components/titleToggle/TitleToggle';

const InteractiveGridSpace = (props) => {
    const [spacing, setSpacing] = useState('');
    const [openBox, setOpenBox] = useState(false);

    function setSpacingValue(e){
        setSpacing(e.target.value);
    }

    return (
        <React.Fragment>
            <h3>Adjustable Column padding</h3>
            <p>The padding of the columns can be increased or decreased by passing a value to the <strong>spacing</strong> prop.</p>
            <TitleToggle toggleEvent={() => { setOpenBox(!openBox) }} >djustable Column padding example</TitleToggle>
            <CollapseBox open={openBox}>
                <div className="code-container">
                    <Highlight>{interactiveGridSpaceTxt}</Highlight>
                </div>
            </CollapseBox>
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
                                <Form onSubmit={setSpacingValue}>
                                    <FieldSet legend="Modify column padding" fullWidth>
                                        <RadioButton onChange={setSpacingValue} value="0" label="0" name="test" />
                                        <RadioButton onChange={setSpacingValue} value="1" label="1" name="test" />
                                        <RadioButton onChange={setSpacingValue} value="2" label="2" name="test" />
                                        <RadioButton onChange={setSpacingValue} value="3" label="3" name="test" />
                                        <RadioButton onChange={setSpacingValue} value="4" label="4" name="test" />
                                        <RadioButton onChange={setSpacingValue} value="5" label="5" name="test" />
                                        <RadioButton onChange={setSpacingValue} value="6" label="6" name="test" />
                                        <RadioButton onChange={setSpacingValue} value="7" label="7" name="test" />
                                        <RadioButton onChange={setSpacingValue} value="8" label="8" name="test" />
                                        <RadioButton onChange={setSpacingValue} value="9" label="9" name="test" />
                                        <RadioButton onChange={setSpacingValue} value="10" label="10" name="test" />
                                        <RadioButton onChange={setSpacingValue} value="" label="Default" name="test" labelLeft/>
                                    </FieldSet>                                    
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