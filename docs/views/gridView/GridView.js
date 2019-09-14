import React, {Component} from 'react';


class GridView extends Component {

    render = () => {
        return(
            <Grid container vMargin="8">
                <Grid row>
                    <Grid col sm="12" md="8" offsetMd="2">
                        <h2>The grid</h2>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default GridView;