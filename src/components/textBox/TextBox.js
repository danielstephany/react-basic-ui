import React from 'react';
import './textBox.less';
import FormItem from  '../formItem/FormItem.js';
import BaseInput from '../baseInput/BaseInput.js';

const TextBox = React.forwardRef(function textBox(props, ref) {
    const { className, errMessage, fullWidth, ...others} = props;
    let classes = className ? className : '';

    if(errMessage){
        classes += ' has-error';
    }
  
    return (
        <FormItem fullWidth={!!fullWidth} className={classes}>
            <label htmlFor={props.id ? props.id : ''}>{props.label}</label>
            <BaseInput ref={ref} {...others} />
            {errMessage ? <span className="inline-error">{errMessage}</span> : null}
        </FormItem>
    );
});

export default TextBox;