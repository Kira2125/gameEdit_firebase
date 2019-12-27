import React, {useState} from 'react';
import  css from './SignUp.module.scss'
import CustomButton from "../CustomButton/CustomButton.component";
import FormInput from "../FormInput/FormInput.component";
import {signUpStart} from "../../redux/user/user.actions";
import {connect} from "react-redux";

const SignUp = ({signUpStart}) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
    event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        signUpStart({displayName, email, password})

    };

    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({...userCredentials, [name]: value });
    };
        return (
            <div className={css.signUp}>
                <h2 className={css.title}>I don't have the account</h2>
                <span>Sign up with email and password</span>
                <form onSubmit={handleSubmit} className={css.signUpForm}>
                    <FormInput type='text' name='displayName'
                               value={displayName} onChange={handleChange}
                               label='Display Name' required/>
                    <FormInput type='text' name='email'
                               value={email} onChange={handleChange}
                               label='email' required/>
                    <FormInput type='password' name='password'
                               value={password} onChange={handleChange}
                               label='password' required/>
                    <FormInput type='password' name='confirmPassword'
                               value={confirmPassword} onChange={handleChange}
                               label='confirmPassword' required/>

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )

}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);