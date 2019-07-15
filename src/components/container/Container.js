import React from 'react';
import './container.scss';

const Container = React.forwardRef(function container(props, ref) {
    const { className, noGutters, children, ...others} = props;
    let classes = className ? `rbui-container ${className}` : 'rbui-container';
    
    if (noGutters) {
        classes += " rbui-container--no-gutters";
    }

    return <div className={classes} ref={ref} {...others}> {children} </div>
});

export default Container;