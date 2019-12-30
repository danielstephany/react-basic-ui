import React from 'react';
import './listItemSecondary.less';

const ListItemSecondary = React.forwardRef( function(props, ref){
    const{children, className, ...others} = props;
    const classes = className ? "secondary-action " + className : "secondary-action"

    return <button className={classes} ref={ref} {...others}>{children}</button>
});

ListItemSecondary.customNameRef = "ListItemSecondary";

export default ListItemSecondary;