import React from 'react';

const TableBody = React.forwardRef(function tableBody(props, ref) {
    const { className, children, ...others } = props;
    const classes = className ? "rbui-table__body " + className : "rbui-table__body";
    return (
        <tbody className={classes} ref={ref} {...others}>{children}</tbody>
    );
});

export default TableBody;