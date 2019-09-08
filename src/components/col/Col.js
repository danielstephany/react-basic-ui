import React from 'react';
import './col.less';
import applyClassName from '../_utils/applyClassName/applyClassName.js';
import PropTypes from 'prop-types';

const Col = React.forwardRef(function col(props, ref) {
    const { 
        className,
        children, 
        xs, 
        sm, 
        md, 
        lg, 
        xl, 
        offsetXs, 
        offsetSm, 
        offsetMd, 
        offsetLg, 
        offsetXl, 
        ...others
    } = props;
    const sizes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    let classes = "";

    classes = applyClassName(classes, 'rbui-col-', xs, sizes);
    classes = applyClassName(classes, 'rbui-col-sm-', sm, sizes);
    classes = applyClassName(classes, 'rbui-col-md-', md, sizes);
    classes = applyClassName(classes, 'rbui-col-lg-', lg, sizes);
    classes = applyClassName(classes, 'rbui-col-xl-', xl, sizes);
    classes = applyClassName(classes, 'rbui-offset-col-', offsetXs, sizes);
    classes = applyClassName(classes, 'rbui-offset-col-sm-', offsetSm, sizes);
    classes = applyClassName(classes, 'rbui-offset-col-md-', offsetMd, sizes);
    classes = applyClassName(classes, 'rbui-offset-col-lg-', offsetLg, sizes);
    classes = applyClassName(classes, 'rbui-offset-col-xl-', offsetXl, sizes);

    classes = classes || "rbui-col";

    classes = className ? `${classes} ${className}` : classes;

    return <div className={classes} ref={ref} {...others} >{children}</div>
});

Col.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any, 
    xs: PropTypes.string, 
    sm: PropTypes.string, 
    md: PropTypes.string, 
    lg: PropTypes.string, 
    xl: PropTypes.string, 
    offsetXs: PropTypes.string, 
    offsetSm: PropTypes.string, 
    offsetMd: PropTypes.string, 
    offsetLg: PropTypes.string, 
    offsetXl: PropTypes.string, 
}

export default Col;