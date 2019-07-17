import React from 'react';
import './list.scss';

const List = React.forwardRef(function list(props, ref){
    const { className, children, ...others} = props;
    const classes = className ? 'list ' + className : 'list';

    return <div role="list" className={classes} {...others} ref={ref}>{children}</div>;
});

export default List;