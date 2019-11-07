import React from 'react';
import Grid from 'components/grid/Grid.js';
import Table from 'components/table/Table.js';
import TableBody from 'components/tableBody/TableBody.js';
import TableHead from 'components/tableHead/TableHead.js';
import TableRow from 'components/tableRow/TableRow.js';
import TableHeadCell from 'components/tableHeadCell/TableHeadCell.js';
import TableCell from 'components/tableCell/TableCell.js';
import TableContainer from 'components/tableContainer/TableContainer.js';
import Caption from 'components/caption/Caption.js';


const GridOptions = () => {
    return (
        <React.Fragment>
            <h3>Grid API</h3>
            <TableContainer>
                <Table>
                    <Caption>Grid with "container" prop</Caption>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>Properties</TableHeadCell>
                            <TableHeadCell>Defaults</TableHeadCell>
                            <TableHeadCell>Type</TableHeadCell>
                            <TableHeadCell>Options</TableHeadCell>
                            <TableHeadCell>Outcome</TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>noGutters</TableCell>
                            <TableCell>undefined</TableCell>
                            <TableCell>boolean</TableCell>
                            <TableCell>true, false</TableCell>
                            <TableCell>When True gutters are set to 0px</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>stretch</TableCell>
                            <TableCell>undefined</TableCell>
                            <TableCell>Boolean</TableCell>
                            <TableCell>true, false</TableCell>
                            <TableCell>When True the max-width is set to auto</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>vMargin</TableCell>
                            <TableCell>undefined</TableCell>
                            <TableCell>number</TableCell>
                            <TableCell>1 - 10</TableCell>
                            <TableCell>When a value is provided the top and bottom margin are set to the value of the provided option times 4 pixels.</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <TableContainer>
                <Table>
                    <Caption>Grid with "row" prop</Caption>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>Properties</TableHeadCell>
                            <TableHeadCell>Defaults</TableHeadCell>
                            <TableHeadCell>Type</TableHeadCell>
                            <TableHeadCell>Options</TableHeadCell>
                            <TableHeadCell>Outcome</TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>alignItems</TableCell>
                            <TableCell>center</TableCell>
                            <TableCell>string</TableCell>
                            <TableCell>stretch,<br /> flex-start,<br /> flex-end,<br /> baseline,<br /> center"</TableCell>
                            <TableCell>Applies the value to the flexbox align-items property</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>justifyContent</TableCell>
                            <TableCell>undefined</TableCell>
                            <TableCell>string</TableCell>
                            <TableCell>flex-end,<br/> center,<br/> space-between,<br/> space-around,<br/> space-evenly</TableCell>
                            <TableCell>Applies the value to the flexbox justify-content property</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>alignContent</TableCell>
                            <TableCell>undefined</TableCell>
                            <TableCell>string</TableCell>
                            <TableCell>"flex-start,<br/> flex-end,<br/> center,<br/> stretch,<br/> space-between,<br/> space-around</TableCell>
                            <TableCell>Applies the value to the flexbox align-content property</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>spacing</TableCell>
                            <TableCell>undefined</TableCell>
                            <TableCell>number</TableCell>
                            <TableCell>1 - 10</TableCell>
                            <TableCell>When a value is provided the child collumns will have a padding value in pixels that is 4 times the number provided.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>gutters</TableCell>
                            <TableCell>undefined</TableCell>
                            <TableCell>boolean</TableCell>
                            <TableCell>true, false</TableCell>
                            <TableCell>When True gutters are set to 0px</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <TableContainer>
                <Table>
                    <Caption>Grid with "col" prop</Caption>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>Properties</TableHeadCell>
                            <TableHeadCell>Defaults</TableHeadCell>
                            <TableHeadCell>Type</TableHeadCell>
                            <TableHeadCell>Options</TableHeadCell>
                            <TableHeadCell>Outcome</TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>xs</TableCell>
                            <TableCell>auto</TableCell>
                            <TableCell>string</TableCell>
                            <TableCell>1 - 12</TableCell>
                            <TableCell>Sets The width of a col at the smallest screen size</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>sm</TableCell>
                            <TableCell>undefined</TableCell>
                            <TableCell>string</TableCell>
                            <TableCell>1 - 12</TableCell>
                            <TableCell>Sets The width of a col at the small screen size</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>md</TableCell>
                            <TableCell>undefined</TableCell>
                            <TableCell>string</TableCell>
                            <TableCell>1 - 12</TableCell>
                            <TableCell>Sets The width of a col at the medium screen size</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>lg</TableCell>
                            <TableCell>undefined</TableCell>
                            <TableCell>string</TableCell>
                            <TableCell>1 - 12</TableCell>
                            <TableCell>Sets The width of a col at the large screen size</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>xl</TableCell>
                            <TableCell>undefined</TableCell>
                            <TableCell>string</TableCell>
                            <TableCell>1 - 12</TableCell>
                            <TableCell>Sets The width of a col at the extra large screen size</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>offsetXs</TableCell>
                            <TableCell>undefined</TableCell>
                            <TableCell>string</TableCell>
                            <TableCell>1 - 12</TableCell>
                            <TableCell>Sets The offset of a col at the smallest screen size </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>offsetSm</TableCell>
                            <TableCell>undefined</TableCell>
                            <TableCell>string</TableCell>
                            <TableCell>1 - 12</TableCell>
                            <TableCell>Sets The offset of a col at the small screen size</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>offsetMd</TableCell>
                            <TableCell>undefined</TableCell>
                            <TableCell>string</TableCell>
                            <TableCell>1 - 12</TableCell>
                            <TableCell>Sets The offset of a col at the medium screen size</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>offsetLg</TableCell>
                            <TableCell>undefined</TableCell>
                            <TableCell>string</TableCell>
                            <TableCell>1 - 12</TableCell>
                            <TableCell>Sets The offset of a col at the large screen size</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>offsetXl</TableCell>
                            <TableCell>undefined</TableCell>
                            <TableCell>string</TableCell>
                            <TableCell>1 - 12</TableCell>
                            <TableCell>Sets The width of a col at the extra large screen size</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    );
}

export default GridOptions;

