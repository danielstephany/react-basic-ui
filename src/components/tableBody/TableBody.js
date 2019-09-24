import React from 'react';

const TableBody = React.forwardRef(function tableCell(props, ref) {
    const { className, children, ...others } = props;
    const classes = className ? "rbui-table-body " + className : "rbui-table-body";
    return (
        <td className={classes} ref={ref} {...others}>{children}</td>
    );
});

export default TableBody;