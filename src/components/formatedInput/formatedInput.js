import React from 'react';
import './formatedInput.scss';

const FormatedInput = React.forwardRef((props, ref) => {
    const { className, errMessage, ...others} = props;
    let formatedInputClass = className ? `form-item ${className}` : 'form-item';
    formatedInputClass = errMessage ? `${formatedInputClass} form-item--error` : formatedInputClass;
    
    return (
        <div className={formatedInputClass}>
            <label>{props.label}</label>
            <input className={formatedInputClass} ref={ref} {...others} />
            {errMessage ? <span className="inline-error">{errMessage}</span> : null}
        </div>
    );
});

export default FormatedInput;