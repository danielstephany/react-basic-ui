import React from 'react';
import PropTypes from 'prop-types';
import './paper.less';

const Paper = React.forwardRef((props, ref)=>{
    const {className, children, noPad, ...others} = props;
    let classes = className ? 'rbui-paper ' + className : 'rbui-paper';

    if(noPad){
        classes += ' rbui-paper--no-padding'
    }

    return <section className={classes} ref={ref} {...others}>{children}</section>
});

Paper.propTypes = {
    className: PropTypes.string
}

export default Paper;