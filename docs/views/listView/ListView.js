import React from 'react';
import Grid from 'components/grid/Grid.js';

const ListView = (props) => {
    return(
        <Grid container vMargin="8">
            <Grid row>
                <Grid col sm="12" md="8" offsetMd="2">
                    <h2>The list</h2>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ListView;