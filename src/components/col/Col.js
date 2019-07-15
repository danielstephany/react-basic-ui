import React from 'react';
import './col.scss';
import applyClassName from '../_utils/applyClassName/applyClassName.js';

export default React.forwardRef(function flexCol(props, ref) {
    const { className, children, xs, sm, md, lg, xl, offsetXs,
         offsetSm, offsetMd, offsetLg, offsetXl, ...others} = props,
        sizes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    let classList = "";

    classList = applyClassName(classList, 'rbui-col-', xs, sizes);
    classList = applyClassName(classList, 'rbui-col-sm-', sm, sizes);
    classList = applyClassName(classList, 'rbui-col-md-', md, sizes);
    classList = applyClassName(classList, 'rbui-col-lg-', lg, sizes);
    classList = applyClassName(classList, 'rbui-col-xl-', xl, sizes);
    classList = applyClassName(classList, 'rbui-offset-col-', offsetXs, sizes);
    classList = applyClassName(classList, 'rbui-offset-col-sm-', offsetSm, sizes);
    classList = applyClassName(classList, 'rbui-offset-col-md-', offsetMd, sizes);
    classList = applyClassName(classList, 'rbui-offset-col-lg-', offsetLg, sizes);
    classList = applyClassName(classList, 'rbui-offset-col-xl-', offsetXl, sizes);

    classList = classList || "rbui-col";

    classList = className ? `${className} ${classList}` : classList;

    return <div className={classList} ref={ref} {...others} >{children}</div>
})