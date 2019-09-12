import React from 'react';
import './blockContent.css';

export default React.forwardRef(function BlockTitle(props, ref){
    const { className, ...others} = props;
    const blockContentClass = className ? `rbui-block-content ${className}` : 'rbui-block-content';

    return (
        <div className={blockContentClass} ref={ref} {...others}>{props.children}</div>
    );
});

