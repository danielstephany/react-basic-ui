import React from 'react';
import './row.scss';
import applyClassName from '../_utils/applyClassName/applyClassName.js';

export default React.forwardRef( function flexRow(props, ref) {
    const { className, children, alignItems, justifyContent, alignContent, spacing, gutters, ...others} = props
    const alignItemsOpts = ['stretch', 'flex-start', 'flex-end', 'baseline', 'center'];
    const justifyContentOpts = ['flex-end', 'center', 'space-between', 'space-around', 'space-evenly'];
    const alignContentOpts = ['flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around'];
    const spacingOpts = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    let classes = className ? 'rbui-row ' + className : 'rbui-row';

    classes = applyClassName(classes, 'rbui-row--align-items-', alignItems, alignItemsOpts);
    classes = applyClassName(classes, 'rbui-row--justify-content-', justifyContent, justifyContentOpts);
    classes = applyClassName(classes, 'rbui-row--align-content-', alignContent, alignContentOpts);
    classes = applyClassName(classes, 'rbui-row--spacing-', spacing, spacingOpts);

    if (gutters === false) classes += " rbui-row--no-gutter";

    return <div className={classes} ref={ref} {...others}>{children}</div>
});