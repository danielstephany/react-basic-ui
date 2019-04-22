import React from 'react';
import './blockTitle.scss';

export default function BlockTitle(props){
    const blockTitleClasses = props.className ? `block-title ${props.className}` : 'block-title';

    return (
        <div className={blockTitleClasses}>
            { props.children }
        </div>
    );
}