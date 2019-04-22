import React from 'react';
import './mainSection.scss';

export default function MainSection(props) {
    const mainSectionClass = props.className ? `main-section ${props.className}` : 'main-section';
    return <section className={mainSectionClass} >{props.children}</section>
}