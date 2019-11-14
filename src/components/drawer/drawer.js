import React, {Component} from "react";
import PropTypes from "prop-types";
import "./drawer.less";

class Drawer extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: this.props.isOpen ? this.props.isOpen : false
        }
        this.mainBodyElement = document.getElementsByTagName("body")[0];
        this.mainHtmlElement = document.getElementsByTagName("html")[0];
    }

    componentDidUpdate = () => {
        if(this.state.open !== this.props.isOpen){
            this.setState({open: this.props.isOpen})
        }
    }

    setDrawerStyles = (styleSetting) => {
        let drawerStyles = {};

        if (styleSetting.slideFrom) {
            if (styleSetting.slideFrom.toLowerCase() === "right") {
                drawerStyles.left = "auto";
                drawerStyles.right = "0";
                drawerStyles.transform = "translateX(100%)";
            }
        }
        if (styleSetting.transitionTime) {
            drawerStyles.transitionDuration = (styleSetting.transitionTime / 1000) + "s";
        }
        if (styleSetting.maxWidth) {
            drawerStyles.maxWidth = styleSetting.maxWidth + "px";
        }
        if (this.state.open) {
            drawerStyles.transform = "translateX(0)";
        }
        
        return drawerStyles;
    }

    setOverlayStyles = () => {
        let overlayStyles = {};
        if (this.state.open) {
            overlayStyles.transform = "translateX(0)";
            overlayStyles.opacity = "1";
        }
        return overlayStyles;
    }

    preventBodyScroll = (preventBodyScroll) => {
        let scrollTop;
        if ((preventBodyScroll !== false) && this.state.open) {
            scrollTop = this.mainHtmlElement.scrollTop;
            this.mainHtmlElement.style.overflow = "hidden";
            this.mainHtmlElement.scrollTop = scrollTop;
        } else if ((preventBodyScroll !== false) && !this.state.open) {
            this.mainHtmlElement.style.overflow = "auto";
        }
    }

    getRef = refName => ref => this[refName] = ref;

    render(){
        let { className, slideFrom, isOpen, transitionTime, maxWidth, preventBodyScroll, drawerToggle, forwardedRef, ...others} = this.props;
        const styleSetting = {
            slideFrom: slideFrom,
            transitionTime: transitionTime,
            maxWidth: maxWidth
        }
        const drawerClasses = className ? `drawer ${className}` : 'drawer';
        let drawerStyles = this.setDrawerStyles(styleSetting);
        let overlayStyles = this.setOverlayStyles();
        this.preventBodyScroll(preventBodyScroll);

        return (
            <React.Fragment>
                <div className="overlay" style={overlayStyles} onClick={drawerToggle} ref={forwardedRef}></div>
                <div className={drawerClasses} style={drawerStyles} {...others}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}

Drawer.propTypes = {
    isOpen: PropTypes.bool,
    slideFrom: PropTypes.string,
    transitionTime: PropTypes.number,
    maxWidth: PropTypes.number,
    preventBodyScroll: PropTypes.bool
}

export default React.forwardRef(function drawer(props, ref) { return <Drawer {...props} forwardedRef={ref} /> });