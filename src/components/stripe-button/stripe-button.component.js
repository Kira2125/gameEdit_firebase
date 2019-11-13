import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_4NG7W1nmeMFRVMUwUBjH24GI00yOA2Y8xk';
    const onToken = token => {
        console.log(token)
        alert('Payment succesfull')
    }

    return (
        <StripeCheckout

            label='BUY NOW'
            name='Payment operation'
            billingAdress
            shippingAdress
            description={`Your total $${price}`}
            amount={priceForStripe}
            panelLabel='BUY NOW'
            token={onToken}
        bitcoin
        />
    )
}

export default StripeButton;