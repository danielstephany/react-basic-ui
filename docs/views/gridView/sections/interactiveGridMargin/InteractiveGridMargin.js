import React, {useState} from 'react';
import Grid from 'components/grid/Grid.js';
import Paper from  'components/paper/Paper.js';
import Form from 'components/form/Form.js';
import FieldSet from 'components/fieldSet/FieldSet.js';
import BaseRadio from 'components/baseRadio/BaseRadio.js';
import CollapseBox from 'components/collapseBox/CollapseBox.js';
import Highlight from 'react-highlight'
import interactiveGridMarginTxt from './interactiveGridMargin.txt';
import TitleToggle from '../../../../components/titleToggle/TitleToggle';

const InteractiveGridMargin = (props) => {
    const [vMargin, setVMargin] = useState('');
    const [openBox, setOpenBox] = useState(false);

    function setSpacingValue(e){
        setVMargin(e.target.value);
    }

    return (
        <React.Fragment>
            <h3>Adjustable Vertical Margin of grid containers</h3>
            <TitleToggle toggleEvent={() => { setOpenBox(!openBox) }} >Adjustable Vertical Margin example</TitleToggle>
            <CollapseBox open={openBox}>
                <div className="code-container">
                    <Highlight>{interactiveGridMarginTxt}</Highlight>
                </div>
            </CollapseBox>
            <div className="fill-container">
                <Grid container vMargin={vMargin} className="grid-example">
                    <Grid row>
                        <Grid col xs="4"><Paper className="textc">xs=4</Paper></Grid>
                        <Grid col xs="4"><Paper className="textc">xs=4</Paper></Grid>
                        <Grid col xs="4"><Paper className="textc">xs=4</Paper></Grid>
                    </Grid>
                </Grid>
                <Grid container vMargin={vMargin} className="grid-example">
                    <Grid row>
                        <Grid col xs="6"><Paper className="textc">xs=6</Paper></Grid>
                        <Grid col xs="6"><Paper className="textc">xs=6</Paper></Grid>
                    </Grid>
                </Grid>
                <Grid container vMargin={vMargin} className="grid-example">
                    <Grid row>
                        <Grid col xs="12"><Paper className="textc">xs=12</Paper></Grid>
                    </Grid>
                </Grid>
                <Grid container className="grid-example">
                    <Grid row>
                        <Grid col xs="12">
                            <Paper className="textc">
                                <Form onSubmit={setSpacingValue}>
                                    <FieldSet legend="Modify container margin" fullWidth>
                                        <BaseRadio onChange={setSpacingValue} value="0" label="0" name="test" />
                                        <BaseRadio onChange={setSpacingValue} value="1" label="1" name="test" />
                                        <BaseRadio onChange={setSpacingValue} value="2" label="2" name="test" />
                                        <BaseRadio onChange={setSpacingValue} value="3" label="3" name="test" />
                                        <BaseRadio onChange={setSpacingValue} value="4" label="4" name="test" />
                                        <BaseRadio onChange={setSpacingValue} value="5" label="5" name="test" />
                                        <BaseRadio onChange={setSpacingValue} value="6" label="6" name="test" />
                                        <BaseRadio onChange={setSpacingValue} value="7" label="7" name="test" />
                                        <BaseRadio onChange={setSpacingValue} value="8" label="8" name="test" />
                                        <BaseRadio onChange={setSpacingValue} value="9" label="9" name="test" />
                                        <BaseRadio onChange={setSpacingValue} value="10" label="10" name="test" />
                                        <BaseRadio onChange={setSpacingValue} value="" label="Default" name="test" labelLeft/>
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

export default InteractiveGridMargin;