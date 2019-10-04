import React from 'react';
import './TextBox.less';

const TextBox = React.forwardRef(function textBox(props, ref) {
    const { className, errMessage, fullWidth, ...others} = props;
    let classes = className ? `rbui-textbox ${className}` : 'rbui-textbox';

    if(errMessage){
        classes += ' rbui-textbox--error';
    }
    if(fullWidth){
        classes += ' rbui-textbox--fullwith';
    }
    
    return (
        <div className={classes}>
            <label for={props.id ? props.id : ''}>{props.label}</label>
            <input ref={ref} {...others} />
            {errMessage ? <span className="inline-error">{errMessage}</span> : null}
        </div>
    );
});

export default TextBox;