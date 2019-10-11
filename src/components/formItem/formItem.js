import React from 'react';
import PropTypes from "prop-types";
import './formItem.less';

const FormItem = React.forwardRef(function(props, ref) {
    const {className, children, fullWidth, ...others} = props;
    const classes = className ? `rbui-form-item ${className}` : 'rbui-form-item';

    if (fullWidth){
        classes += 'rbui-form-item--full-width';
    }

    return <div className={classes} ref={ref} {...others} >{children}</div>;
});

FormItem.propTypes = {
    className: PropTypes.string
}

export default FormItem;