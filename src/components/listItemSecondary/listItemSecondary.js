import React from 'react';
import './listItemSecondary.scss';

const ListItemSecondary = function(props){
    const{children, className, ...others} = props;
    const classes = className ? "secondary-action " + className : "secondary-action"

    return <button className={classes} {...others}>{children}</button>
};

ListItemSecondary.customNameRef = "ListItemSecondary";

export default ListItemSecondary;