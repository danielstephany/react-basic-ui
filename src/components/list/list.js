import React from 'react';
import './list.scss';

const List = React.forwardRef(function list(props, ref){
    const { className, children, ...others} = props;
    const classes = className ? 'list ' + className : 'list';

    return <section role="list" className={classes} {...others} ref={ref}>{children}</section>;
});

export default List;