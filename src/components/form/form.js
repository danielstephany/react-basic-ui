import React from 'react';
import './form.scss';

export default React.forwardRef(function form(props, ref) {
    const {className, ...others} = props
    const extraClass = className ? className : '';
    
    return <form className={extraClass} ref={ref} {...others} >{props.children}</form>
});