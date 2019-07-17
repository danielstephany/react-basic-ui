import React from 'react';
import './listItem.scss';
import hasChild from '../_utils/hasChild/hasChild.js';

const ListItem = React.forwardRef(function(props, ref){
    const {children, className, ...others} = props;
    let classes = className ? 'list-item ' + className : 'list-item';

    if (hasChild(children, "ListItemSecondary")){
        classes += " list-item--with-secondary";
    }

    return <div role="listitem" className={classes} {...others} ref={ref}>{children}</div>;
});

export default ListItem;