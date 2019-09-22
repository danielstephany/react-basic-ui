import React from 'react';

const Table = React.forwardRef(function table(props, ref){
    const {className, children, ...others} = props;
    const classes = className ? "rbui-table " + className : "rbui-table";
    return(
        <table className={classes} ref={ref} {...others}>{children}</table>
    );
});

export default Table;