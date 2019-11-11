import React from 'react';
import './SignUp.styles.scss';
import CustomButton from "../CustomButton/CustomButton.component";
import FormInput from "../FormInput/FormInput.component";
import {auth, createUserProfileDocument} from "../../firebase/firebase";

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password != confirmPassword) {
            alert('Пароли не совпадают');
            return
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
        } catch (e) {
            console.log(e);
        }
    }

    handleChange= event => {
        const {name, value} = event.target;

        this.setState({[name]: value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I don't have the account</h2>
                <span>Sign up with email and password</span>
                <form onSubmit={this.handleSubmit} className='sign-up-form'>
                    <FormInput type='text' name='displayName'
                               value={displayName} onChange={this.handleChange}
                               label='Display Name' required/>
                    <FormInput type='text' name='email'
                               value={email} onChange={this.handleChange}
                               label='email' required/>
                    <FormInput type='password' name='password'
                               value={password} onChange={this.handleChange}
                               label='password' required/>
                    <FormInput type='password' name='confirmPassword'
                               value={confirmPassword} onChange={this.handleChange}
                               label='confirmPassword' required/>

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;