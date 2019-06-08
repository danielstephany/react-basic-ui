import React from 'react';

const ListItem = React.forwardRef(function(props, ref){
    const {children, className, ...others} = props;
    const classes = className ? 'list-item ' + className : 'list-item';

    return <div role="listitem" className={classes} {...others} ref={ref}>{children}</div>;
});

export default ListItem;