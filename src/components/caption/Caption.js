import React from 'react';
import './caption.less';

const Caption = React.forwardRef(function caption (props, ref) {
    const {className, children, ...others} = props;
    const classes = className ? "rbui-caption " + className : "rbui-caption";

    return <caption className={classes} ref={ref} {...others}>{children}</caption>
});

export default Caption;