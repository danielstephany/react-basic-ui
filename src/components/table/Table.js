import React from 'react';
import './table.less';

const Table = React.forwardRef(function table(props, ref){
    const { className, children, stickyLabels, stickyHeader, ...others} = props;
    let classes = className ? "rbui-table " + className : "rbui-table";

    if (stickyLabels){
        classes += ' rbui-table--sticky-col-labels';
    }
    if (stickyHeader) {
        classes += ' rbui-table--sticky-header';
    }

    return(<table className={classes} ref={ref} {...others}>{children}</table>);
});

export default Table;