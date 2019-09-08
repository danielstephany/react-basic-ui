import React from 'react';
import PropTypes from 'prop-types';
import './paper.less';

const Paper = React.forwardRef((props, ref)=>{
    const {className, children, ...others} = props;
    const classes = className ? 'bui-paper ' + className : 'bui-paper';

    return <section className={classes} ref={ref} {...others}>{children}</section>
});

Paper.propTypes = {
    className: PropTypes.string
}

export default Paper;