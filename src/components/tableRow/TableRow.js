import React from 'react';
import './tableRow.less';

const TableRow = React.forwardRef(function tableRow(props, ref){
    const {className, children, ...others} = props;
    const classes = className ? "rbui-table__row " + className : "rbui-table__row";
    return(
        <tr className={classes} ref={ref} {...others}>{children}</tr>
    );
});

export default TableRow;