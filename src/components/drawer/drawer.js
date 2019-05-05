import React, {Component} from "react";
import PropTypes from "prop-types";
import "./drawer.scss";

class Drawer extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: this.props.isOpen ? this.props.isOpen : false
        }
    }

    componentDidMount = () => {
        this.overlay.addEventListener("touchmove", function(e){
            e.preventDefault();
        });
    }

    toggleDrawer = () => {
        this.setState({open: !this.state.open});
        console.log("test");
    }

    setDrawerStyles = (slideFrom, transitionTime, maxWidth) => {
        let drawerStyles = {};

        if (slideFrom) {
            if (slideFrom.toLowerCase() === "right") {
                drawerStyles.left = "auto";
                drawerStyles.right = "0";
                drawerStyles.transform = "translateX(100%)";
            }
        }
        if (transitionTime) {
            drawerStyles.transitionDuration = (this.props.transitionTime / 1000) + "s";
            console.log(drawerStyles.transitionDuration);
        }
        if (maxWidth) {
            drawerStyles.maxWidth = this.props.maxWidth;
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

    getRef = refName => ref => this[refName] = ref;

    render(){
        let { className, slideFrom, transitionTime, maxWidth, preventBodyScroll, ...others} = this.props;
        const drawerClasses = this.props.className ? `drawer ${this.props.className}` : 'drawer';
        let drawerStyles = this.setDrawerStyles(slideFrom, transitionTime, maxWidth);
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
    transitionTime: PropTypes.number

}

export default Drawer;