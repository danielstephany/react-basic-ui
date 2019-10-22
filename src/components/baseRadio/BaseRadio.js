import React, {Component} from 'react';
import './baseRadio.less';

class BaseRadio extends Component {

    render = () => {
        const { className, forwardedRef, label, labelLeft, ...others } = this.props;
        const classes = className ? 'rbui-radio ' + className : 'rbui-radio';

        if(labelLeft){
            classes += " rbui-radio--label-left";
        }

        return (
            <label className={classes} {...BaseRadio}>
                <span className="rbui-radio__label">{label}</span>
                <div className="rbui-radio__container">
                    <input className="rbui-radio__input" type="radio" ref={ref} {...others} />
                    <div role="radio" className="rbui-radio__btn"></div>
                </div>
            </label>
        );
    }
}

export default React.forwardRef(function baseRadio(props, ref) { return <BaseRadio {...props} forwardedRef={ref} /> });
