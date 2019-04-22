import React from 'react';
import './form.scss';

export default function Form(props) {
    const extraClass = props.className ? props.className : '';
    return <form className={extraClass} onSubmit={props.onSubmit} noValidate={props.noValidate}>{props.children}</form>
}