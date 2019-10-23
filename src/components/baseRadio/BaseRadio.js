import React, {Component} from 'react';
import './baseRadio.less';

class BaseRadio extends Component {

    render = () => {
        const { className, forwardedRef, label, labelLeft, ...others } = this.props;
        let classes = className ? 'rbui-radio ' + className : 'rbui-radio';

        if(labelLeft){
            classes += " rbui-radio--label-left";
        }

        return (
            <label className={classes} {...BaseRadio}>
                <div className="rbui-radio__container">
                    <input className="rbui-radio__input" type="radio" ref={forwardedRef} {...others} />
                    <div role="radio" className="rbui-radio__btn"></div>
                </div>
                <span className="rbui-radio__label">{label}</span>
            </label>
        );
    }
}

export default React.forwardRef(function baseRadio(props, ref) { return <BaseRadio {...props} forwardedRef={ref} /> });
