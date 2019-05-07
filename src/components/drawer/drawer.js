import React, {Component} from "react";
import PropTypes from "prop-types";
import "./drawer.scss";

class Drawer extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: this.props.isOpen ? this.props.isOpen : false
        }
        this.mainBodyElement = document.getElementsByTagName("body")[0];
        this.mainHtmlElement = document.getElementsByTagName("html")[0];
    }

    toggleDrawer = () => {
        this.setState({open: !this.state.open});
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
        if ((preventBodyScroll === true) && this.state.open) {
            scrollTop = this.mainHtmlElement.scrollTop;
            this.mainHtmlElement.style.overflow = "hidden";
            this.mainHtmlElement.scrollTop = scrollTop;
        } else if ((preventBodyScroll === true) && !this.state.open) {
            this.mainHtmlElement.style.overflow = "auto";
        }
    }

    getRef = refName => ref => this[refName] = ref;

    render(){
        let { className, slideFrom, transitionTime, maxWidth, preventBodyScroll, ...others} = this.props;
        const styleSetting = {
            slideFrom: slideFrom,
            transitionTime: transitionTime,
            maxWidth: maxWidth
        }
        const drawerClasses = this.props.className ? `drawer ${this.props.className}` : 'drawer';
        let drawerStyles = this.setDrawerStyles(styleSetting);
        let overlayStyles = this.setOverlayStyles();
        this.preventBodyScroll(preventBodyScroll);

        return (
            <React.Fragment>
                <div className="overlay" style={overlayStyles} onClick={this.toggleDrawer} ref={this.getRef("overlay")}></div>
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
    maxWidth: PropTypes.number
}

export default Drawer;