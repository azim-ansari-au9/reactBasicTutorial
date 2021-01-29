import React from 'react';
import SignupForm from '../components/SignupForm';
class Signup extends React.Component {    
    constructor(props) {
        super(props)
    
        this.state = {
            email: {
                name: 'email',
                value: '',
                isRequired: true,
                error:'Please enter the value'
            },
            password: {
                name: 'password',
                value: '',
                isRequired: true,
                error:'Please enter the value'
            },
            repeat_password: {
                name: 'repeat_password',
                value: '',
                isRequired: false,
                error:''
            },
            image: {
                name: 'image',
                value: '',
                isRequired: false,
                error:''
            },
            terms: {
                name: 'terms',
                value: false,
                isRequired: true,
                error:'Please enter the value'
            },
            error: true
        }

        // this.validationHandler = this.validationHandler.bind(this)
    }

    validationHandler(key) {
        const keyInfo = this.state[key];
        if(keyInfo.isRequired && !keyInfo.value) {
            this.setState({
                [key]: {
                    ...this.state[key],
                    error: 'Please enter the value'
                },
                error: true
            });
        } else {
            this.setState({
                [key]: {
                    ...this.state[key],
                    error: ''
                },
                error: false
            });
        }
    }

    onSubmitHandler = (event) => {
        if(event) {
            console.log('INSIDE IF CLASS BLOCK')
            event.preventDefault();
        }
        console.log(this.state); 
    }

    inputChangehandler = (key, value) => {
        console.group('inputChangehandler');
        console.log('key',key)
        console.log('value',value)
        console.groupEnd();
        this.setState({
            [key]: {
                ...this.state[key],
                value: value
            }
        },() =>{
            this.validationHandler(key);
        });
    }

    render() {

        return(
            <React.Fragment>
                <h1>{this.state.page}</h1>
                <SignupForm
                    onSubmit={this.onSubmitHandler}
                    changeHandler={this.inputChangehandler}
                    formInfo={{
                        image: this.state.image,
                        email: this.state.email,
                        password: this.state.password,
                        repeat_password: this.state.repeat_password,
                        terms: this.state.terms
                    }}
                    error={this.state.error}
                />
            </React.Fragment>
        );
    }
}

export default Signup;
