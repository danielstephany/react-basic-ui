import React from 'react';
import PropTypes from "prop-types";
import './formatedInput.scss';

const FormatedInput = React.forwardRef((props, ref) => {
    let formatedInputClass = props.className ? `form-item ${props.className}` : 'form-item';
    //if errMessage is passed form-items displays with error class
    formatedInputClass = props.errMessage ? `${formatedInputClass} form-item--error` : formatedInputClass;
    
    return (
        <div className={formatedInputClass}>
            <label>{props.label}</label>
            <input
                ref={ref}
                id={props.id}
                name={props.name}
                type={props.type}
                value={props.value}
                required={props.required}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
            {props.errMessage ? <span className="inline-error">{props.errMessage}</span> : null}
        </div>
    );
});

FormatedInput.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default FormatedInput;