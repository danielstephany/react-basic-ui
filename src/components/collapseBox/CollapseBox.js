import React, {Container} from 'react';

class CollapseBox extends Container {
    constructor(props){
        super(props);
        this.state = {
            height: "0px"
        }
        this.isOpen = this.props.open;
    }

    componentDidMount = () => {
        if (!this.props.open) {
            this.setOpenHeight()
        }
    }

    componentDidUpdate = () => {
        if(this.props.open && !this.isOpen){
            this.setOpenHeight();
        } else if (!this.props.open && this.isOpen) {

        }
    }

    setOpenHeight = () => {
        const height = this.innerBox.clientHeight + "px";
        this.setState({height: height}, () => {
            this.isOpen = true;
        });
    }

    setClosedHeight = () => {
        this.setState({ height: "0px" }, () => {
            this.isOpen = true;
        });
    }

    render = () => {
        const {className, open, children, ...others} = this.props
        const classes = className ? 'rbui-collapse-box ' + className : 'rbui-collapse-box';
        const styles = {
            height: this.state.height
        }

        return (
            <div className={classes} styles={styles} ref={(div) => { this.box = div }} {...others}>
                <div ref={(div) => {this.innerBox = div}}>
                    {className}
                </div>
            </div>
        );
    }
}