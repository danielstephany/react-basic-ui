import React from 'react';
import './baseLabel.less';

const BaseLabel = React.forwardRef(function baseLabel(props, rel){
    const {className, children, ...others} = props;
    const classes = className ? 'rbui-label ' + className : 'rbui-label';

    return <label className={classes} {...others}>{children}</label>
});

export default BaseLabel;