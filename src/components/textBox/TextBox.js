import React from 'react';
import './textBox.less';
import FormItem from  '../formItem/FormItem.js';
import BaseLabel from '../baseLabel/BaseLabel.js';
import BaseInput from '../baseInput/BaseInput.js';

const TextBox = React.forwardRef(function textBox(props, ref) {
    const { className, errMessage, fullWidth, label, ...others} = props;
    const id = others.id;
    let classes = className ? 'rbui-textbox ' + className : 'rbui-textbox';

    if(errMessage){
        classes += ' has-error';
    }
  
    return (
        <FormItem fullWidth={!!fullWidth} className={classes}>
            <BaseLabel {...id ? {htmlFor: id} : null}>{label}</BaseLabel>
            <BaseInput ref={ref} {...others} />
            {errMessage ? <span className="inline-error">{errMessage}</span> : null}
        </FormItem>
    );
});

export default TextBox;