import React from 'react';
import Table from 'components/table/Table.js';
import TableBody from 'components/tableBody/TableBody.js';
import TableHead from 'components/tableHead/TableHead.js';
import TableRow from 'components/tableRow/TableRow.js';
import TableHeadCell from 'components/tableHeadCell/TableHeadCell.js';
import TableCell from 'components/tableCell/TableCell.js';
import TableContainer from 'components/tableContainer/TableContainer.js';

const BreakpointsTable = function(props){
    return (
        <TableContainer>
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
    );
};

export default BreakpointsTable;