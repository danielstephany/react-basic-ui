import React, {Component} from 'react';
import Card from 'components/card/card.js';
import BlockTitle from 'components/blockTitle/blockTitle.js';
import BlockContent from 'components/blockContent/BlockContent.js';
import FormItem from 'components/formItem/formItem.js';
import FormatedInput from 'components/formatedInput/formatedInput.js';
import Form from 'components/form/form.js';
import Button from 'components/button/button.js';
import { validateInputSet, validateInputOnBlur} from '../../utils/utils.js';

class AddContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullName: '',
            email: '',
            phone: '',
            formError: {}
        }
        this.validateInputOnBlur = validateInputOnBlur.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        let formError,
        validationArray = [
            { formErrorProp: "fullName", name: "full name", element: this.fullNameInput },
            { formErrorProp: "email", name: "email", element: this.emailInput },
            { formErrorProp: "phone", name: "phone", element: this.phoneInput }
        ];

        formError = validateInputSet(validationArray);

        if (formError){
            this.setState({ formError: formError });
        }else {
            this.props.addContact(this.state);
            this.setState({ fullName: '', email: '', phone: '', formError: {} });          
        }
 
    }

    updateInput = name => event => {
        this.setState({ [name]: event.target.value }, () => {
            this.props.updatePendingCard({
                fullName: this.state.fullName,
                email: this.state.email,
                phone: this.state.phone
            });
        });
    };

    render() {
        return (
            <Card className="add-contact-form">
                <BlockTitle>
                    <h2>Create a new contact</h2>
                </BlockTitle>
                <BlockContent>
                    <Form onSubmit={this.handleSubmit} noValidate={true}>
                        <FormatedInput 
                            onBlur={this.validateInputOnBlur({ formErrorProp: "fullName", name: "full name" })} 
                            ref={(input) => { this.fullNameInput = input }} 
                            label="Full Name" 
                            name="fullName" 
                            type="text" 
                            value={this.state.fullName} 
                            required={true} 
                            errMessage={this.state.formError.fullName} 
                            onChange={this.updateInput("fullName")} />
                        <FormatedInput 
                            onBlur={this.validateInputOnBlur({ formErrorProp: "email", name: "email" })} 
                            ref={(input) => { this.emailInput = input }} 
                            label="Email" 
                            name="email" 
                            type="email" 
                            value={this.state.email} 
                            required={true} 
                            errMessage={this.state.formError.email} 
                            onChange={this.updateInput("email")} />
                        <FormatedInput 
                            onBlur={this.validateInputOnBlur({ formErrorProp: "phone", name: "phone" })} 
                            ref={(input) => { this.phoneInput = input }} 
                            label="Phone" 
                            name="phone" 
                            type="tel" 
                            value={this.state.phone} 
                            required={true} 
                            errMessage={this.state.formError.phone} 
                            onChange={this.updateInput("phone")} />
                        <FormItem>
                            <Button type="submit" >Add contact</Button>
                        </FormItem>
                    </Form>
                </BlockContent>
            </Card>
        );
    }
}

export default AddContactForm;