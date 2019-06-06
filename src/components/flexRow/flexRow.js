import React from 'react';
import './flexRow.scss';
import applyClassName from '../_utils/applyClassName/applyClassName.js';

export default React.forwardRef( function flexRow(props, ref) {
    const { className, children, alignItems, justifyContent, alignContent, spacing, gutters, ...others} = props
    const alignItemsOpts = ['stretch', 'flex-start', 'flex-end', 'baseline', 'center'];
    const justifyContentOpts = ['flex-end', 'center', 'space-between', 'space-around', 'space-evenly'];
    const alignContentOpts = ['flex-start', 'flex-end', 'stretch', 'space-between', 'space-around'];
    const spacingOpts = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    let flexRowClass = className ? `flex-row ${className}` : 'flex-row';

    flexRowClass = applyClassName(flexRowClass, 'flex-row--align-items-', alignItems, alignItemsOpts);
    flexRowClass = applyClassName(flexRowClass, 'flex-row--justify-content-', justifyContent, justifyContentOpts);
    flexRowClass = applyClassName(flexRowClass, 'flex-row--align-content-', alignContent, alignContentOpts);
    flexRowClass = applyClassName(flexRowClass, 'flex-row--spacing-', spacing, spacingOpts);

    if (gutters === false) flexRowClass += " flex-row--no-gutter";

    return <div className={flexRowClass} ref={ref} {...others}> {children} </div>
});