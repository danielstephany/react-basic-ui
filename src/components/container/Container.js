import React from 'react';
import './container.scss';
import PropTypes from 'prop-types';

const Container = React.forwardRef(function container(props, ref) {
    const { className, noGutters, children, ...others} = props;
    let classes = className ? `rbui-container ${className}` : 'rbui-container';
    
    if (noGutters) {
        classes += " rbui-container--no-gutters";
    }

    return <div className={classes} ref={ref} {...others}> {children} </div>
});

Container.propTypes = {
    className: PropTypes.string,
    noGutters: PropTypes.bool,
    children: PropTypes.any
}

export default Container;