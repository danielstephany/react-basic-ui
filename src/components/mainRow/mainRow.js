import React from 'react';
import './mainRow.scss';

export default function MainRow(props){
    const mainRowClass = props.className ? `main-row ${props.className}` : 'main-row';
    return <div className={mainRowClass}>{props.children}</div>
}