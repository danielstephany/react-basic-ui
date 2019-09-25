import React from 'react';
import './tableHeadCell.less';

const TableHeadCell = React.forwardRef(function tableHeadCell(props, ref){
    const {className, children, ...others} = props;
    const classes = className ? "rbui-table-head-cell " + className : "rbui-table-head-cell";
    return(
        <th className={classes} ref={ref} {...others}>{children}</th>
    );
});

export default TableHeadCell;