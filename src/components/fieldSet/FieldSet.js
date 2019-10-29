import React from 'react';
import FormItem from '../formItem/FormItem.js';
import PropTypes from 'prop-types';
import './fieldSet.less';

const FieldSet = React.forwardRef(function fieldSet(props, ref){
    const {className, children, errMessage, fullWidth, legend, ...others} = props;
    let classes = className ? className : '';

    if(errMessage){
        classes += ' has-error';
    }

    return (
        <FormItem className={classes} fullWidth={!!fullWidth}>
            <fieldset className='rbui-fieldset' ref={ref} {...others}>
                <legend>{legend}</legend>
                <div className="rbui-fieldset__container">
                    {children}
                </div>
            </fieldset>
            {errMessage ? <span className="inline-error">{errMessage}</span> : null}
        </FormItem>
    );
});

FieldSet.propTypes = {
    className: PropTypes.string,
    errMessage: PropTypes.string,
    fullWidth: PropTypes.bool,
    legend: PropTypes.string
}

export default FieldSet;