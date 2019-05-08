import React from 'react';
import './mainSection.scss';

const MainSection = React.forwardRef(
    function mainSection(props, ref){
        const {className, ...other} = props;
        const mainSectionClass = props.className ? `main-section ${props.className}` : 'main-section';
        return <section ref={ref} className={mainSectionClass} {...other}>{props.children}</section>
    }
);

export default MainSection;