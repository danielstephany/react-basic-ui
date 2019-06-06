import React from 'react';
import PropTypes from "prop-types";
import './formItem.scss';

const FormItem = React.forwardRef(function(props, ref) {
    const {className, children, ...others} = props;
    const formItemClasses = className ? `form-item ${className}` : 'form-item';
    return <div className={formItemClasses} ref={ref} {...others} >{children}</div>;
});

FormItem.propTypes = {
    className: PropTypes.string
}

export default FormItem;