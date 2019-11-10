import React from 'react';
import css from './AuthPage.module.scss';
import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/SignUp/SignUp.component";

const AuthPage = () => {

    return (
        <div className={css.authPage}>
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default AuthPage;