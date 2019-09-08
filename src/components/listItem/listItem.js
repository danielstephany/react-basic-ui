import React from 'react';
import './listItem.less';
import hasChild from '../_utils/hasChild/hasChild.js';

const ListItem = React.forwardRef(function(props, ref){
    const {children, className, link, button, ...others} = props;
    let classes = className ? 'list-item ' + className : 'list-item';

    if (hasChild(children, "ListItemSecondary")){
        classes += " list-item--with-secondary";
    }
    
    if (link){
        classes += ' list-item--link';
    }else if (button) {
        classes += ' list-item--button';
    } else {
        classes += ' list-item--no-cta';
    }

    return <div role="listitem" className={classes} {...others} ref={ref}>{children}</div>;
});

export default ListItem;