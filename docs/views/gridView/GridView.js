import React, {PureComponent} from 'react';
import './gridView.less';
import Grid from 'components/grid/Grid.js';

import BreakpointsTable from './sections/BreakpointsTable.js';
import BreakpointsGrid from './sections/breakpointsGrid/BreakpointsGrid.js';
import OffsetGrid from './sections/offsetGrid/OffsetGrid.js';
import AutoGrid from './sections/autoGrid/AutoGrid.js';
import SimpleGrid from './sections/simpleGrid/SimpleGrid.js';
import InteractiveGridSpace from './sections/interactiveGridSpace/InteractiveGridSpace.js';
import InteractiveGridMargin from './sections/interactiveGridMargin/InteractiveGridMargin.js';
import GridOptions from './sections/GridOptions.js';

class GridView extends PureComponent {

    render = () => {
        return(
            <React.Fragment>
                <Grid container vMargin="10">
                    <Grid row>
                        <Grid col sm="12" md="8" offsetMd="2">
                            <h2>The grid</h2>
                            <p>React Basic UI comes with a responsive grid system that uses a 12 column layout. The Grid also has responive breakpoints alowing for customizable layouts that will work on any screen.</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container vMargin="10">
                    <Grid row>
                        <Grid col sm="12" md="8" offsetMd="2">
                            <BreakpointsTable />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container vMargin="10">
                    <Grid row>
                        <Grid col sm="12" md="8" offsetMd="2">
                            <AutoGrid />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container vMargin="10">
                    <Grid row>
                        <Grid col sm="12" md="8" offsetMd="2">
                            <SimpleGrid/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container vMargin="10">
                    <Grid row>
                        <Grid col sm="12" md="8" offsetMd="2">
                            <BreakpointsGrid />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container vMargin="10">
                    <Grid row>
                        <Grid col sm="12" md="8" offsetMd="2">
                            <OffsetGrid />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container vMargin="10">
                    <Grid row>
                        <Grid col sm="12" md="8" offsetMd="2">
                            <InteractiveGridSpace />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container vMargin="10">
                    <Grid row>
                        <Grid col sm="12" md="8" offsetMd="2">
                            <InteractiveGridMargin />
                        </Grid>
                    </Grid>
                </Grid>
                <GridOptions />
            </React.Fragment>
        );
    }
}

export default GridView;