import React from 'react';
import './tableHeader.less';

const TableHeader = React.forwardRef(function tableHeader(props, ref){
    const {className, children, ...others} = props;
    const classes = className ? "rbui-table-header " + className : "rbui-table-header";
    return(
        <th className={classes} ref={ref} {...others}>{children}</th>
    );
});

export default TableHeader;