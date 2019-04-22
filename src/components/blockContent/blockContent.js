import React from 'react';
import './blockContent.css';

export default function BlockTitle(props){
    const blockContentClass = props.className ? `block-content ${props.className}` : 'block-content';

    return (
        <div className={blockContentClass}>{props.children}</div>
    );
}