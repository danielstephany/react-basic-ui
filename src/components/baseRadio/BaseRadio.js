import React, {Component} from 'react';

class BaseRadio extends Component {


    simulateClick = () => {
        var event = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        });
        var cb = this.input;
        var cancelled = !cb.dispatchEvent(event);
        if (cancelled) {
            // A handler called preventDefault.
            alert("cancelled");
        } else {
            // None of the handlers called preventDefault.
            alert("not cancelled");
        }
    }

    render = () => {
        const { className, forwardedRef, ...others } = this.props;
        const classes = className ? 'rbui-radio ' + className : 'rbui-radio';
        let ref;

        if (forwardedRef) {
            ref = header => { this.header = header; forwardedRef(header); };
        } else {
            ref = header => { this.header = header; };
        }

        return (
            <div className={classes} onClick={this.simulateClick} {...BaseRadio}>
                <input className="rbui-radio__input" type="radio" ref={ref} {...others} />
                <div className="rbui-radio__btn"></div>
            </div>
        );
    }
}

export default React.forwardRef(function baseRadio(props, ref) { return <BaseRadio {...props} forwardedRef={ref} /> });
