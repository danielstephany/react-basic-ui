export function validateInput(el){
    let value;
    if (typeof el !== "undefined" && el instanceof HTMLElement && el.value){
        value = el.value.trim();
        if ( value && el.validity.valid ) {
            return value;
        }
    }else {
        return false;
    }
}

export function validateInputSet(validationArray){
    let errObject = {},
        hasError = false;
    if (typeof validationArray !== "undefined" && Array.isArray(validationArray)) {
        validationArray.forEach((validation)=>{
            if (typeof validation !== "undefined"){
                if (!validation.element.value.trim()) {
                    errObject[validation.formErrorProp] = `${validation.name} is requried`;
                    hasError = true;
                } else if (!validation.element.validity.valid) {
                    errObject[validation.formErrorProp] = `valid ${validation.name} is requried`;
                    hasError = true;
                }
            } else {
                console.log('ERROR: validateInputSet expects "validationArray" to be in the form { formErrorProp: "propertyName", name: "errorName", element: "formElement"}');
            }
        });
        if (!hasError) errObject = undefined;
        return errObject
    } else {
        console.log('ERROR: validateInputSet expects "validationArray" of type Array');
        return false;
    }
}

/*
 validateInputOnBlur must be bound to the Class it is used in
 */

export function validateInputOnBlur (validationObj) {
    let formError = { ...this.state.formError },
    element;

    if (typeof validationObj !== "undefined" && typeof validationObj.formErrorProp !== "undefined" && typeof validationObj.name !== "undefined" ){
        
        if (formError[validationObj.formErrorProp]) formError[validationObj.formErrorProp] = "";

        return (e) => {
            if (e.target instanceof HTMLElement) {
                element = e.target;
                if (!element.value.trim()) {
                    this.setState({ formError: { ...this.state.formError, [validationObj.formErrorProp]: `${validationObj.name} is requried` } });
                } else if (!element.validity.valid) {
                    this.setState({ formError: { ...this.state.formError, [validationObj.formErrorProp]: `valid ${validationObj.name} is requried` } });
                } else {
                    this.setState({ formError: formError });
                }

            } else {
                console.log('ERROR: validateInputOnBlur should be called when assigned to a event');
            }
        }
    } else {
        console.log('ERROR: validateInputOnBlur expects "validationObj" to be in the form { formErrorProp: "propertyName", name: "errorName" }');
    }
    
}

export default {
    validateInput: validateInput,
    validateInputOnBlur: validateInputOnBlur,
};
