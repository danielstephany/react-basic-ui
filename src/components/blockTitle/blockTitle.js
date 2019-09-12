import React from 'react';
import './blockTitle.less';

export default function BlockTitle(props){
    const classes = props.className ? `rbui-block-title ${props.className}` : 'rbui-block-title';

    return (
        <div className={classes}>
            { props.children }
        </div>
    );
}