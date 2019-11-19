import React from 'react';
import './checkbox.less';

const Checkbox = React.forwardRef( function checkbox(props, ref) {
    const { className, forwardedRef, label, labelLeft, ...others } = props;
    let classes = className ? 'rbui-checkbox ' + className : 'rbui-checkbox';

    if (labelLeft) {
        classes += " rbui-checkbox--label-left";
    }

    return (
        <label className={classes}>
            <div className="rbui-checkbox__container">
                <input className="rbui-checkbox__input" type="checkbox" ref={ref} {...others} />
                <div role="checkBox" className="rbui-checkbox__btn"></div>
            </div>
            <span className="rbui-checkbox__label">{label}</span>
        </label>
    );
});

export default Checkbox;