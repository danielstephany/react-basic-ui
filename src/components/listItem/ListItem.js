import React from 'react';
import './listItem.less';
import hasChild from '../_utils/hasChild/hasChild.js';

const ListItem = React.forwardRef(function listItem (props, ref){
    const {children, className, hasAction, ...others} = props;
    let classes = className ? 'list-item ' + className : 'list-item';

    if (hasChild(children, "ListItemSecondary")){
        classes += " list-item--with-secondary";
    }
    
    if (hasAction){
        classes += ' list-item--action';
    }

    return <div role="listitem" className={classes} {...others} ref={ref}>{children}</div>;
});

export default ListItem;