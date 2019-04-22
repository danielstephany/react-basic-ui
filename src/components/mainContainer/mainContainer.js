import React from 'react';
import './mainContainer.scss';

export default function MainContainer(props) {
    const mainContainerClass = props.className ? `main-container ${props.className}` : 'main-container';

    return <div className={mainContainerClass}>{props.children}</div>
}