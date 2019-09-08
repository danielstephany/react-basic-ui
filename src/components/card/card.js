import React from 'react';
import './card.less';

export default function Card(props) {
    const extraClass = props.className ? props.className : '';

    return <div className={`card ${extraClass}`}>{props.children}</div>;
}