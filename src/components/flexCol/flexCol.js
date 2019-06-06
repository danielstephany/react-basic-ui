import React from 'react';
import './flexCol.scss';
import applyClassName from '../_utils/applyClassName/applyClassName.js';

export default React.forwardRef(function flexCol(props, ref) {
    const { className, children, xs, sm, md, lg, xl, offsetXs,
         offsetSm, offsetMd, offsetLg, offsetXl, ...others} = props,
        sizes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    let classList = "";

    classList = applyClassName(classList, 'flex-col-', xs, sizes);
    classList = applyClassName(classList, 'flex-col-sm-', sm, sizes);
    classList = applyClassName(classList, 'flex-col-md-', md, sizes);
    classList = applyClassName(classList, 'flex-col-lg-', lg, sizes);
    classList = applyClassName(classList, 'flex-col-xl-', xl, sizes);
    classList = applyClassName(classList, 'offset-col-', offsetXs, sizes);
    classList = applyClassName(classList, 'offset-col-sm-', offsetSm, sizes);
    classList = applyClassName(classList, 'offset-col-md-', offsetMd, sizes);
    classList = applyClassName(classList, 'offset-col-lg-', offsetLg, sizes);
    classList = applyClassName(classList, 'offset-col-xl-', offsetXl, sizes);

    classList = classList || "flex-col";

    classList = className ? `${className} ${classList}` : classList;

    return <div className={classList} ref={ref} {...others} >{children}</div>
})