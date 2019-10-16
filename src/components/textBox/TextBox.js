import React from 'react';
import './textBox.less';
import FormItem from  '../formItem/FormItem.js';
import BaseLabel from '../baseLabel/BaseLabel.js';
import BaseInput from '../baseInput/BaseInput.js';

const TextBox = React.forwardRef(function textBox(props, ref) {
    const { className, errMessage, fullWidth, ...others} = props;
    let classes = className ? className : '';

    if(errMessage){
        classes += ' has-error';
    }
  
    return (
        <FormItem fullWidth={!!fullWidth} className={classes}>
            <BaseLabel htmlFor={props.id ? props.id : ''}>{props.label}</BaseLabel>
            <BaseInput ref={ref} {...others} />
            {errMessage ? <span className="inline-error">{errMessage}</span> : null}
        </FormItem>
    );
});

export default TextBox;