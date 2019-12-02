import React from 'react';
import setClasses from '../_utils/setClasses/setClasses.js';
import './baseTextarea.less';

const BaseTextarea = React.forwardRef((props, ref) => {
    const {className, children, ...others} = props;
    const classes = setClasses('rbui-base-textarea', className);

    return <textarea className={classes} ref={ref} {...others}>{children}</textarea>;
});

export default BaseTextarea; 