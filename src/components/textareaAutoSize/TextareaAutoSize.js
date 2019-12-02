import React, {Component} from 'react';
import setClasses from '../_utils/setClasses/setClasses.js';
import './textareaAutoSize.less';
import FormItem from '../formItem/FormItem.js';

class Textarea extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: props.value || "",
            textheight: undefined
        };
    }

    componentDidMount = () => {
        this.textarea.addEventListener('input', this.passToDiv);
        this.textarea.style.height = this.div.clientHeight + "px";
    }

    componentWillUnmount = () => {
        this.textarea.removeEventListener('input', this.passToDiv);
    }

    passToDiv = (e) => {
        this.setState({text: e.target.value},()=>{
            this.textarea.style.height = this.div.clientHeight + "px";
        });
        console.dir(this.textarea);
    }
 
    render = () => {
        const { className, label, forwardedRef, value, ...others} = this.props;
        const classes = setClasses('rbui-textarea', className);
        let ref;
        let setValue = value ? value: "";
        if (forwardedRef) {
            ref = textarea => { this.textarea = textarea; forwardedRef(textarea); };
        } else {
            ref = textarea => { this.textarea = textarea; };
        }

        return (
            <div className={classes}>
                {label ? <label>{label}</label> : null}
                <div className="rbui-textarea__hidden-clone" ref={div => {this.div = div}}>{this.state.text}</div>
                <textarea className="rbui-textarea__textarea" ref={ref} {...others}></textarea>
            </div>
        );
    }

};

export default React.forwardRef(function textarea(props, ref) { return <Textarea {...props} forwardedRef={ref} /> });
