import React from "react";
import './drawerContainer.css';

const DrawerContainer = React.forwardRef(
    function drawerContainer(props, ref){
        const {className, ...others} = props;
        const componentClasses = props.className ? `drawer-container ${props.className}` : 'drawer-container'

        return <div ref={ref} className={componentClasses} {...others}>{props.children}</div>
    }
);

export default DrawerContainer;