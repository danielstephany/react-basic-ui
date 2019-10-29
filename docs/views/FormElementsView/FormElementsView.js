import React, { Component } from 'react';
import Grid from 'components/grid/Grid.js';
import Highlight from 'react-highlight';
import Paper from 'components/paper/Paper.js';
import Form from 'components/form/Form.js';
import TextBox from 'components/textBox/TextBox';
import FieldSet from 'components/fieldSet/FieldSet.js';
import BaseRadio from 'components/baseRadio/BaseRadio.js';


class GridView extends Component {

    render = () => {
        return (
            <Grid container vMargin="8">
                <Grid row>
                    <Grid col sm="12" md="8" offsetMd="2">
                        <h2>Form Elements</h2>
                    
                        <div className="fill-container">
                          
                            <Grid container stretch vMargin="8">
                                <Grid row>
                                    <Grid col sm="12" md="8">
                                        <Paper>
                                            <h3>example form</h3>
                                            <Form>
                                                <TextBox label="First Name"/>
                                                <TextBox label="Last Name" />
                                                <TextBox type="email" label="Email" />
                                                <TextBox type="date" label="Birthday" />
                                                <TextBox type="number" min="0" label="age"/>
                                                <TextBox label="Gender"/>
                                                <FieldSet legend="Modify column padding" fullWidth>
                                                    <BaseRadio value="0" label="0" name="test" />
                                                    <BaseRadio value="1" label="1" name="test" />
                                                    <BaseRadio value="2" label="2" name="test" />
                                                 
                                                </FieldSet> 
                                                <TextBox label="Gender" />
                                            </Form>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default GridView;