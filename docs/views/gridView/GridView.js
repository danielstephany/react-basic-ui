import React, {Component} from 'react';
import './gridView.less';
import Grid from 'components/grid/Grid.js';

import BreakpointsTable from './BreakpointsTable.js';
import BreakpointsGrid from './BreakpointsGrid.js';
import SimpleGrid from './SimpleGrid.js';
import InteractiveGridSpace from './InteractiveGridSpace.js';

class GridView extends Component {

    render = () => {
        return(
            <React.Fragment>
                <Grid container vMargin="8">
                    <Grid row>
                        <Grid col sm="12" md="8" offsetMd="2">
                            <h2>The grid</h2>
                            <p>Using the grid component will allow you to develop a all kinds of layouts that are responsive.</p>
                            <h3>break points</h3>
                            <p>Out of the box the grid uses pre defined break points that you can use to rearange your layout for multible screen sizes.</p>
                            <BreakpointsTable/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container vMargin="10">
                    <Grid row>
                        <Grid col sm="12" md="8" offsetMd="2">
                            <SimpleGrid/>
                            <BreakpointsGrid/>
                            <InteractiveGridSpace/>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default GridView;