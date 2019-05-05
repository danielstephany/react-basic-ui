import React from "react";
import propTypes from "prop-types";
import './drawerContainer.css';

function DrawerContainer(props){

    const componentClasses = props.className ? `drawer-container ${props.className}` : 'drawer-container'

    return <div className={componentClasses}>{props.children}</div>
}

export default DrawerContainer;