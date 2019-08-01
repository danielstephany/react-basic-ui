import React from 'react';
import './container.scss';
import PropTypes from 'prop-types';
import applyClassName from '../_utils/applyClassName/applyClassName.js';


const Container = React.forwardRef(function container(props, ref) {
    const { className, noGutters, unFramed, children, vMargin, ...others} = props;
    const vMarginOpts = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    let classes = className ? `rbui-container ${className}` : 'rbui-container';
   
    classes = applyClassName(classes, 'rbui-container--margin-', vMargin, vMarginOpts);
    
    if (noGutters) {
        classes += " rbui-container--no-gutters";
    }

    if (unFramed) {
        classes += " rbui-container--unFramed";
    }

    return <div className={classes} ref={ref} {...others}> {children} </div>
});

Container.propTypes = {
    className: PropTypes.string,
    noGutters: PropTypes.bool,
    children: PropTypes.any
}

export default Container;