import React from 'react';
import './baseSelect.less';
import setClasses from '../_utils/setClasses/setClasses.js';

const BaseSelect = React.forwardRef(function baseSelect(props, ref){
    const { className, children, ...options} = props;
    const classes = setClasses('rbui-select', className);

    return <select class={classes} {...options}>{children}</select>
});

export default BaseSelect;