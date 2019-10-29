import React from 'react';
import Grid from 'components/grid/Grid.js';
import Table from 'components/table/Table.js';
import TableBody from 'components/tableBody/TableBody.js';
import TableHead from 'components/tableHead/TableHead.js';
import TableRow from 'components/tableRow/TableRow.js';
import TableHeadCell from 'components/tableHeadCell/TableHeadCell.js';
import TableCell from 'components/tableCell/TableCell.js';
import TableContainer from 'components/tableContainer/TableContainer.js';


const GridOptions = () => {
    return (
        <React.Fragment>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell colspan="4">Table with "container" prop</TableHeadCell>
                        </TableRow>
                        <TableRow>
                            <TableHeadCell>Properties</TableHeadCell>
                            <TableHeadCell>Defaut</TableHeadCell>
                            <TableHeadCell>Options</TableHeadCell>
                            <TableHeadCell>Result</TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>noGutters</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    );
}

export default GridOptions;

