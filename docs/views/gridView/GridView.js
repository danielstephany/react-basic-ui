import React, {Component} from 'react';
import Grid from 'components/grid/Grid.js';
import Highlight from 'react-highlight'
import gridtxt from './grid.txt';
import Table from 'components/table/Table.js';
import TableRow from 'components/tableRow/TableRow.js';
import TableHeader from 'components/tableHeader/TableHeader.js';
import TableCell from 'components/tableCell/TableCell.js';

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
                        <Table>
                            <TableRow>
                                <TableHeader>sizes</TableHeader>
                                <TableHeader>xs</TableHeader>
                                <TableHeader>sm</TableHeader>
                                <TableHeader>md</TableHeader>
                                <TableHeader>lg</TableHeader>
                                <TableHeader>xl</TableHeader>
                            </TableRow>
                            <TableRow>
                                <TableCell>break points</TableCell>
                                <TableCell>&lt;&eq;576px</TableCell>
                                <TableCell>577px - 768px</TableCell>
                                <TableCell>769px - 998px</TableCell>
                                <TableCell>998px - 1200px</TableCell>
                                <TableCell>&gt;1200px</TableCell>
                            </TableRow>
                        </Table>
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