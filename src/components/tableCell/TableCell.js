import React from 'react';
import './tableCell.less';

const TableCell = React.forwardRef(function tableCell(props, ref){
    const {className, children, ...others} = props;
    const classes = className ? "rbui-table-cell " + className : "rbui-table-cell";
    return(
        <td className={classes} ref={ref} {...others}>{children}</td>
    );
});

export default TableCell;