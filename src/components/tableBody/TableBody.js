import React from 'react';
import './tableBody.less';

const TableBody = React.forwardRef(function tableBody(props, ref) {
    const { className, children, ...others } = props;
    const classes = className ? "rbui-table-body " + className : "rbui-table-body";
    return (
        <tbody className={classes} ref={ref} {...others}>{children}</tbody>
    );
});

export default TableBody;