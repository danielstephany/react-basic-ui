import React, {Component} from 'react';
import Grid from 'components/grid/Grid.js';
import Highlight from 'react-highlight'
import gridtxt from './grid.txt';


class GridView extends Component {

    render = () => {
        return(
            <Grid container vMargin="8">
                <Grid row>
                    <Grid col sm="12" md="8" offsetMd="2">
                        <h2>The grid</h2>
                        <p>Using the grid component will allow you to develop a all kinds of layouts that are responsive.</p>
                        <h3>break points</h3>
                        <p>Out of the box the grid uses pre defined break points that you can use to rearange your layout for multible screen sizes.</p>
                        <table>
                            <tr>
                                <th>sizes</th>
                                <th>xs</th>
                                <th>sm</th>
                                <th>md</th>
                                <th>lg</th>
                                <th>xl</th>
                            </tr>
                            <tr>
                                <td>&lt;&eq;576px</td>
                                <td>577px - 768px</td>
                                <td>769px - 998px</td>
                                <td>998px - 1200px</td>
                                <td>&gt;1200px</td>
                            </tr>
                        </table>
                        <Highlight className="testClass" >
                        {gridtxt}
                        </Highlight>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default GridView;