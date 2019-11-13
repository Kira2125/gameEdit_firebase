import React from 'react';
import css from "./WithSpinner.module.scss";


const WithSpinner = (WrappedComponent) => {
    const Spinner = ({isLoading, ...otherProps}) => {
        return isLoading ? (
            <div className={css.SpinnerOverlay}>
                <div className={css.SpinnerContainer}/>
            </div>
        ) : (
            <WrappedComponent {...otherProps}/>
        )
    };
    return Spinner;
};


export default WithSpinner;