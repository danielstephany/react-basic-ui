import React from 'react';
import './tableRow.less';

const TableRow = React.forwardRef(function tableRow(props, ref){
    const {className, children, ...others} = props;
    const classes = className ? "rbui-table-row " + className : "rbui-table-row";
    return(
        <tr className={classes} ref={ref} {...others}>{children}</tr>
    );
});

export default TableRow;