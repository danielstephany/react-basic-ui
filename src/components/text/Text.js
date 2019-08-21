import React from 'react';
import PropTypes from 'prop-types';

const Text = React.forwardRef((props, ref)=> {
    const {className, children, varient, mimic, lg, ...others} = props;
    let element;
    let classes = className ? `rbui-text-${varient} ${className}` : 'rbui-text-' + varient;
    let mimicOptions = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body']



    classes = applyClassName(classes, 'rbui-text-', mimic, mimicOptions);

    if(varient === "h1"){
        element = <h1 className={classes} {...others} ref={ref}>{children}</h1>
    } else if(varient === "h2") {
        element = <h2 className={classes} {...others} ref={ref}>{children}</h2>
    } else if(varient === "h3") {
        element = <h3 className={classes} {...others} ref={ref}>{children}</h3>
    } else if(varient === "h4") {
        element = <h4 className={classes} {...others} ref={ref}>{children}</h4>
    } else if(varient === "h5") {
        element = <h5 className={classes} {...others} ref={ref}>{children}</h5>
    } else if(varient === "h6") {
        element = <h6 className={classes} {...others} ref={ref}>{children}</h6>
    } else if(varient === "body") {
        element = <p className={classes} {...others} ref={ref}>{children}</p>
    } else {
        element = <span className={'rbui-text ' + className} {...others} ref={ref}>{children}</span>
    }

    return element;
});

Text.propTypes = {
    className: PropTypes.string,
    varient: PropTypes.string
}

export default Text;