import React, { Component} from 'react';
import './collapseBox.less';

class CollapseBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            height: "0px"
        }
        this.isOpen = this.props.open;
    }

    componentDidMount = () => {
        if (this.props.open) {
            this.setOpenHeight();
        } else {
            this.setClosedHeight();
        }
    }

    componentDidUpdate = () => {
        if(this.props.open && !this.isOpen){
            this.setOpenHeight();
        } else if (!this.props.open && this.isOpen) {
            this.setClosedHeight();
        }
    }

    setOpenHeight = () => {
        const height = this.props.transitionDuration ? this.innerBox.clientHeight + "px": "auto";

        this.setState({height: height}, () => {
            this.isOpen = true;
        });
    }

    setClosedHeight = () => {
        this.setState({ height: "0px" }, () => {
            this.isOpen = false;
        });
    }

    render = () => {
        const { className, open, children, transitionDuration, ...others} = this.props
        const classes = className ? 'rbui-collapse-box ' + className : 'rbui-collapse-box';
        const styles = {
            transitionDuration: this.props.transitionDuration ? this.props.transitionDuration : "0.25s",
            height: this.state.height
        };

        return (
            <div className={classes} style={styles} ref={(div) => { this.box = div }} {...others}>
                <div ref={(div) => {this.innerBox = div}}>
                    {(this.props.open || this.props.transitionDuration) ? children : null}
                </div>
            </div>
        );
    }
}

export default CollapseBox;