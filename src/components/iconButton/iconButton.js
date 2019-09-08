import React from 'react';
import './iconButton.less';

export default React.forwardRef(function iconButton(props, ref) {
    const { className, light, first, last, disabled, ...others} = props;
    let iconButtonClasses = className ? "icon-button " + className : "icon-button";

    if (light) iconButtonClasses += " icon-button--light";

    if (disabled) iconButtonClasses += " icon-button--disabled";

    if (first) iconButtonClasses += " icon-button--first";

    if (last)  iconButtonClasses += " icon-button--last";

    return <button className={iconButtonClasses} ref={ref} {...others}>{props.children}</button>
});