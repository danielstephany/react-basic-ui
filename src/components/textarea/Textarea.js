import React from 'react';
import FormItem from '../formItem/FormItem.js';
import BaseLabel from '../baseLabel/BaseLabel.js';
import BaseTextarea from '../baseTextarea/BaseTextarea.js';
import './textarea.less';
import setClasses from '../_utils/setClasses/setClasses.js';

const Textarea = React.forwardRef(function textarea (props, ref) {
    const { className, errMessage, fullWidth, label, ...others } = props;
    const id = others.id ? others.id : "";
    let classes = setClasses('rbui-textbox', className); 

    if (errMessage) {
        classes += ' has-error';
    }

    return (
        <FormItem fullWidth={!!fullWidth} className={classes}>
            <BaseLabel {...id ? { htmlFor: id } : null}>{label}</BaseLabel>
            <BaseTextarea ref={ref} {...others} />
            {errMessage ? <span className="inline-error">{errMessage}</span> : null}
        </FormItem>
    );
});

export default Textarea;