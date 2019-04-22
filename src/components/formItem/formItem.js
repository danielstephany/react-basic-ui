import React from 'react';
import PropTypes from "prop-types";
import './formItem.scss';

const FormItem = function(props) {
    const formItemClasses = props.className ? `form-item ${props.className}` : 'form-item';
    return (<div className={formItemClasses}>{props.children}</div>);
}

FormItem.propTypes = {
    className: PropTypes.string
}

export default FormItem;