import React, {Component} from 'react';
import './gridView.less';
import Grid from 'components/grid/Grid.js';
import Highlight from 'react-highlight'
import gridtxt from './grid.txt';
import Table from 'components/table/Table.js';
import TableBody from 'components/tableBody/TableBody.js';
import TableHead from 'components/tableHead/TableHead.js';
import TableRow from 'components/tableRow/TableRow.js';
import TableHeadCell from 'components/tableHeadCell/TableHeadCell.js';
import TableCell from 'components/tableCell/TableCell.js';
import TableContainer from 'components/tableContainer/TableContainer.js';
import Paper from  'components/paper/Paper.js';

class GridView extends Component {

    render = () => {
        const style = {overflowY: "auto", height: '120px'}
        return(
            <Grid container vMargin="8">
                <Grid row>
                    <Grid col sm="12" md="8" offsetMd="2">
                        <h2>The grid</h2>
                        <p>Using the grid component will allow you to develop a all kinds of layouts that are responsive.</p>
                        <h3>break points</h3>
                        <p>Out of the box the grid uses pre defined break points that you can use to rearange your layout for multible screen sizes.</p>
                   
                            <TableContainer style={style}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableHeadCell>sizes</TableHeadCell>
                                            <TableHeadCell>xs</TableHeadCell>
                                            <TableHeadCell>sm</TableHeadCell>
                                            <TableHeadCell>md</TableHeadCell>
                                            <TableHeadCell>lg</TableHeadCell>
                                            <TableHeadCell>xl</TableHeadCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>break points</TableCell>
                                            <TableCell>&lt;=576px</TableCell>
                                            <TableCell>577px - 768px</TableCell>
                                            <TableCell>769px - 998px</TableCell>
                                            <TableCell>998px - 1200px</TableCell>
                                            <TableCell>&gt;1200px</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>break points</TableCell>
                                            <TableCell>&lt;=576px</TableCell>
                                            <TableCell>577px - 768px</TableCell>
                                            <TableCell>769px - 998px</TableCell>
                                            <TableCell>998px - 1200px</TableCell>
                                            <TableCell>&gt;1200px</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>break points</TableCell>
                                            <TableCell>&lt;=576px</TableCell>
                                            <TableCell>577px - 768px</TableCell>
                                            <TableCell>769px - 998px</TableCell>
                                            <TableCell>998px - 1200px</TableCell>
                                            <TableCell>&gt;1200px</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>break points</TableCell>
                                            <TableCell>&lt;=576px</TableCell>
                                            <TableCell>577px - 768px</TableCell>
                                            <TableCell>769px - 998px</TableCell>
                                            <TableCell>998px - 1200px</TableCell>
                                            <TableCell>&gt;1200px</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                       
                        <Highlight className="testClass" >
                        {gridtxt}
                        </Highlight>

                        <h3>Simple grid</h3>

                        <div className="fill-container">
                            <Grid container className="grid-example">
                                <Grid row>
                                    <Grid col xs="4"><Paper className="textc">xs=4</Paper></Grid>
                                    <Grid col xs="4"><Paper className="textc">xs=4</Paper></Grid>
                                    <Grid col xs="4"><Paper className="textc">xs=4</Paper></Grid>
                                    <Grid col xs="3"><Paper className="textc">xs=3</Paper></Grid>
                                    <Grid col xs="9"><Paper className="textc">xs=9</Paper></Grid>
                                    <Grid col xs="12"><Paper className="textc">xs=12</Paper></Grid>
                                </Grid>
                            </Grid>
                        </div>

                        <h3>Grid with breakpoints</h3>

                        <div className="fill-container">
                            <Grid container className="grid-example">
                                <Grid row>
                                    <Grid col xs="4" md="3"><Paper className="textc">xs=4 md=3</Paper></Grid>
                                    <Grid col xs="4" md="3"><Paper className="textc">xs=4 md=3</Paper></Grid>
                                    <Grid col xs="4" md="3"><Paper className="textc">xs=4 md=3</Paper></Grid>
                                    <Grid col xs="6" md="3"><Paper className="textc">xs=3 md=3</Paper></Grid>
                                    <Grid col xs="6" md="12"><Paper className="textc">xs=9 md=12</Paper></Grid>
                                    <Grid col xs="12"><Paper className="textc">xs=12</Paper></Grid>
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