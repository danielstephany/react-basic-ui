import React, { Component } from 'react';
import Grid from 'components/grid/Grid.js';
// import Highlight from 'react-highlight'
import Paper from 'components/paper/Paper.js';
import Form from 'components/form/Form.js';
import TextBox from 'components/textBox/TextBox';
import FieldSet from 'components/fieldSet/FieldSet.js';
import RadioButton from 'components/radioButton/RadioButton.js';
import Checkbox from 'components/checkbox/Checkbox.js';
import Textarea from 'components/textarea/Textarea.js';
import BaseSelect from 'components/baseSelect/BaseSelect.js';

class GridView extends Component {

    log = (e) => {
        console.log(e.target.value);
    }

    render = () => {
        return (
            <Grid container vMargin="8">
                <Grid row>
                    <Grid col sm="12" md="8" offsetMd="2">
                        <h2>Form Elements</h2>
                    
                        <div className="fill-container">
                            {/* <Highlight>
                                {"<h1>text<h1/>"}
                            </Highlight> */}
                            <Grid container stretch vMargin="8">
                                <Grid row>
                                    <Grid col sm="12">
                                        <Paper>
                                            <h3>example form</h3>
                                            <Form>
                                                <TextBox label="First Name" id="firstName"/>
                                                <TextBox label="Last Name" />
                                                <TextBox type="email" label="Email" />
                                                <TextBox type="date" label="Birthday" />
                                                <TextBox type="number" min="0" label="Age"/>
                                                <TextBox label="Gender"/>
                                                <FieldSet legend="Favorite Ninja Turtle" fullWidth>
                                                    <RadioButton value="0" labelLeft label="Leonardo" name="test" />
                                                    <RadioButton value="1" label="Michelangelo" name="test" />
                                                    <RadioButton value="2" label="Donatello" name="test" />
                                                    <RadioButton value="2" label="Raphael" name="test" />
                                                </FieldSet>
                                                <FieldSet legend="check favorite flavors" fullWidth>
                                                    <Checkbox value="0" labelLeft label="chocolate" name="test" />
                                                    <Checkbox value="1" label="vanila" name="test" />
                                                    <Checkbox value="2" label="almond" name="test" />
                                                </FieldSet>  
                                                <TextBox label="Gender" />
                                                <Textarea label="Additional comments" onChange={this.log}/>
                                                <BaseSelect></BaseSelect>
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