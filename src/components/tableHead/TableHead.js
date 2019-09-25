import React from 'react';

const TableHead = React.forwardRef(function tableHead(props, ref) {
    const { className, children, ...others } = props;
    const classes = className ? "rbui-table-head " + className : "rbui-table-head";
    return (
        <thead className={classes} ref={ref} {...others}>{children}</thead>
    );
});

export default TableHead;