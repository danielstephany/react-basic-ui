import React, { Component } from 'react';
import './appHeader.less';
import PropTypes from 'prop-types';
import applyClassName from '../_utils/applyClassName/applyClassName.js';

class AppHeader extends Component {

    syncHeight = () => {
        this.spacer.style.height = this.header.clientHeight + "px";
    }

    componentDidMount() {
        if (this.props.fixedSpacer){
            this.syncHeightTimer = setInterval(()=>{
                this.syncHeight();
            }, 250);
            this.syncHeightTimeout = setTimeout(() => {
                clearInterval(this.syncHeightTimer);
            }, 5000);
            window.addEventListener('resize', this.syncHeight);
        }
    }

    componentWillUnmount() {
        if (this.props.fixedSpacer) {
            if (this.syncHeightTimer) {
                clearInterval(this.syncHeightTimer);
            }
            if (this.syncHeightTimeout) {
                clearTimeout(this.syncHeightTimeout)
            }
            window.removeEventListener('resize', this.syncHeight);
        }
    }

    render () {
        const { className, fixed, fixedSpacer, forwardedRef, children, align, ...others } = this.props;
        const spacer = fixedSpacer ? <div ref={(spacer) => { this.spacer = spacer }} className="rbui-app-header__spacer"></div> : null;
        const fixedOptions = ['top', 'bottom']
        let ref;
        let classes = className ? "rbui-app-header " + className : "rbui-app-header";
        classes = applyClassName(classes, 'rbui-app-header--fixed-', fixed, fixedOptions);

        if (forwardedRef){
            ref = header => { this.header = header; forwardedRef(header); };
        } else {
            ref = header => { this.header = header;};
        }

        return (
            <React.Fragment>
                <header className={classes} ref={ref} {...others} >   
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
