import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'components/grid/Grid.js';

class Home extends Component {
    
    render = () => { 
        return (
            <Grid container vMargin="8">
                <Grid row>
                    <Grid col sm="12" md="8" offsetMd="2">
                            <h2>React Basic UI</h2>
                            <h3>React Basic UI is a React component library build to help developers get projects build faster.</h3>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default Home;