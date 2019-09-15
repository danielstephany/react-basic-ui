import React from 'react';
import './listItemAction.less';

const ListItemAction = React.forwardRef(function listItemAction(props, ref) {
    const {className, button, component, children, ...others} = props;
    const Component = component;
    let link;
    let classes = className ? 'rbui-list-item-link ' + className : 'rbui-list-item-link';

    if (component){
        link = <Component className={classes} {...others}>{children}</Component>;
    } else if (button){
        link = <button className={classes} {...others}>{children}</button>;
    } else {
        link = <a className={classes} {...others}>{children}</a>;
    }

    return link;
});

export default ListItemAction;