import React from 'react';
import './baseLabel.less';

const BaseLabel = React.forwardRef(function baseLabel(props, rel){
    const {className, children, inline, ...others} = props;
    let classes = className ? 'rbui-label ' + className : 'rbui-label';

    if (inline) {
        classes += ' rbui-label--inline';
    }

    return <label className={classes} {...others}>{children}</label>
});

export default BaseLabel;