import React from 'react';

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
        const { className, ...others } = this.props;
        const classes = className ? 'rbui-radio ' + className : 'rbui-radio';

        return (
            <div className={classes} onClick={this.simulateClick}>
                <input type="radio" ref={input => { this.input = input; ref(input); }} {...others} />
            </div>
        );
    }
}
