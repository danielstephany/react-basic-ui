import React from 'react';
import './mainContainer.scss';

export default React.forwardRef(function MainContainer(props, ref) {
    const { className, noGutters, children, ...others} = props;
    let mainContainerClass = className ? `main-container ${className}` : 'main-container';
    
    if (noGutters) mainContainerClass += " main-containers--no-gutters";

    return <div className={mainContainerClass} ref={ref} {...others}> {children} </div>
});