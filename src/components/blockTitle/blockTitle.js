import React from 'react';
import './blockTitle.less';

export default function BlockTitle(props){
    const classes = props.className ? `block-title ${props.className}` : 'block-title';

    return (
        <div className={classes}>
            { props.children }
        </div>
    );
}