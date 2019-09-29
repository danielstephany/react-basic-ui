import React from 'react';
import './tableCell.less';

const TableCell = React.forwardRef(function tableCell(props, ref){
    const {className, children, ...others} = props;
    const classes = className ? "rbui-table__cell " + className : "rbui-table__cell";
    return(
        <td className={classes} ref={ref} {...others}>{children}</td>
    );
});

export default TableCell;