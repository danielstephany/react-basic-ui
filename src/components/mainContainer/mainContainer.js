import React from 'react';
import './mainContainer.scss';

export default function MainContainer(props) {
    const { className, gutters} = props;
    let mainContainerClass = className ? `main-container ${className}` : 'main-container';
    
    if (gutters === false){
        mainContainerClass += " main-containers--no-gutters";
    }

    return <div className={mainContainerClass}>{props.children}</div>
}