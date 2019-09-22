import React from 'react';
import './tableContainer.less';

const TableContainer = React.forwardRef(function tableContainer(props, ref){
    const {className, children, ...others} = props;
    const classes = className ? "rbui-table-container " + className : "rbui-table-container";
    return(
        <div className={classes} ref={ref} {...others}>{children}</div>
    );
});

export default TableContainer;