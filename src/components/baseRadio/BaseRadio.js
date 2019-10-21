import React, {Component} from 'react';
import './baseRadio.less';

class BaseRadio extends Component {


    // simulateClick = () => {
    //     var event = new MouseEvent('click', {
    //         view: window,
    //         bubbles: false,
    //         cancelable: false
    //     });
    //     this.input.dispatchEvent(event);
    // }

    render = () => {
        const { className, forwardedRef, label, ...others } = this.props;
        const classes = className ? 'rbui-radio ' + className : 'rbui-radio';
        let ref;

        if (forwardedRef) {
            ref = input => { this.input = input; forwardedRef(input); };
        } else {
            ref = input => { this.input = input; };
        }

        return (
            <label className={classes} {...BaseRadio}>
                <span className="rbui-radio__label">test</span>
                <div className="rbui-radio__container">
                    <input className="rbui-radio__input" type="radio" ref={ref} {...others} />
                    <div role="radio" className="rbui-radio__btn"></div>
                </div>
            </label>
        );
    }
}

export default React.forwardRef(function baseRadio(props, ref) { return <BaseRadio {...props} forwardedRef={ref} /> });
