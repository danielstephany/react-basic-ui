import React from 'react';

const BaseInput = React.forwardRef(function baseInput(props, ref) {
    const {className, ...others} = props;
    const classes = className ? "rbui-input" + className : "rbui-input";
    return (<input className={classes} ref={ref} {...others}/>);
});