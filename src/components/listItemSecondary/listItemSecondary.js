import React from 'react';
import './listItemSecondary.scss';

const ListItemSecondary = React.forwardRef( function(props, ref){
    const{children, className, ...others} = props;
    const classes = className ? "secondary-action " + className : "secondary-action"

    return <button className={classes} ref={ref} {...others}>{children}</button>
});

ListItemSecondary.customNameRef = "ListItemSecondary";

export default ListItemSecondary;