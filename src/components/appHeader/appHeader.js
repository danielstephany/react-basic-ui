import React, { Component } from 'react';
import './appHeader.scss';
import PropTypes from 'prop-types';

class AppHeader extends Component {

    syncHeight = () => {
        this.spacer.style.height = this.header.clientHeight + "px";
    }

    componentDidMount() {
        if (this.props.fixedSpacer){
            this.syncHeight();
            window.addEventListener('resize', this.syncHeight);
        }
    }

    componentWillUnmount() {
        if (this.props.fixedSpacer) {
            window.removeEventListener('resize', this.syncHeight);
        }
    }

    setFixedClass = (currentClasses) => {
        let fixed = this.props.fixed;
        if (typeof fixed === "string"){
                fixed = fixed.toLowerCase();

            if (fixed === "top") {
                return currentClasses + " app-header--fixed-top";
            } else if (fixed === "bottom") {
                return currentClasses + " app-header--fixed-bottom";
            }
        }
        return currentClasses;
    }

    render () {
        const { className, fixed, fixedSpacer, forwardedRef, children, align, ...others } = this.props,
            spacer = fixedSpacer ? <div ref={(spacer) => { this.spacer = spacer }} className="app-header__spacer"></div> : null;
        let ref,
            classes = className ? "app-header " + className : "app-header";

        classes = this.setFixedClass(classes);

        if (forwardedRef){
            ref = {ref: (header) => { this.header = header; forwardedRef(header)} };
        }else {
            ref = { ref: (header) => { this.header = header;} };
        }

        return (
            <React.Fragment>
                <header className={classes} {...ref} {...others} >   
                    {children}
                </header>
                {spacer}
            </React.Fragment>
        )
    }
}

AppHeader.propTypes = {
    fixed: PropTypes.string,
    alignItems: PropTypes.string,
}

export default React.forwardRef(function appHeader (props, ref) { return <AppHeader {...props} forwardedRef={ref}/> });
