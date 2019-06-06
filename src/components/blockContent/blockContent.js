import React from 'react';
import './blockContent.css';

export default React.forwardRef(function BlockTitle(props, ref){
    const { className, ...others} = props;
    const blockContentClass = className ? `block-content ${className}` : 'block-content';

    return (
        <div className={blockContentClass} ref={ref} {...others}>{props.children}</div>
    );
});

