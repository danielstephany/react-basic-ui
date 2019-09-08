import React from 'react';
import './listItemIcon.less';

const ListItemIcon = React.forwardRef( function listItemIcon(props, ref) {
    const {className, children, ...others} = props;
    let classes = className ? "list-item-icon " + className : "list-item-icon";

    return <div className={classes} ref={ref} {...others}>{children}</div>;
});

export default ListItemIcon;