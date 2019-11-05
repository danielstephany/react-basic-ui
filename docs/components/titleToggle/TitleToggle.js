import React from 'react';
import PropTypes from 'prop-types';
import './titleToggle.less';

const TitleToggle = (props) => {
    const {children, toggleEvent, ...others} = props;

    return (
        <div className="title-toggle" {...others}>
            <span className="title-toggle__title">{children}</span>
            {toggleEvent ? <button className="title-toggle__toggle" onClick={toggleEvent}><i className="fas fa-code"></i></button> : null}
        </div>
    )
}

TitleToggle.propTypes = {
    toggleEvent: PropTypes.func
}

export default TitleToggle;