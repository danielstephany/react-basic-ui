import React from 'react';

const TableHeadCell = React.forwardRef(function tableHeadCell(props, ref){
    const {className, children, ...others} = props;
    const classes = className ? "rbui-table__head-cell " + className : "rbui-table__head-cell";
    return(
        <th className={classes} ref={ref} {...others}>{children}</th>
    );
});

export default TableHeadCell;