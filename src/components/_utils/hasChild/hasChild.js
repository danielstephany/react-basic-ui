import React from 'react';

export default function hasChild (children, childName) {

    const childrenArray = React.Children.toArray(children);
    let hasCustomName = false;
    console.log(childrenArray);
    childrenArray.forEach(item => {
        if (item.type && item.type.customNameRef === childName) {
            hasCustomName = true;
            return
        }
    });

    return hasCustomName;
}

