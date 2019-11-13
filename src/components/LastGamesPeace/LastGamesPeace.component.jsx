import React from 'react';
import '../LastGames/LastGames.styles.scss';
import StripeButton from "../stripe-button/stripe-button.component";

const LastGamesPeace = ({lastGamesPeace}) => {
    return (
        <div>
            <div className="limg" style={{backgroundImage: `url(${lastGamesPeace.Url})`}}></div>
            <div className="feature">
                <h4>{lastGamesPeace.header}</h4>
                <p>{lastGamesPeace.text.substr(0, 50)}...</p>
                <h4>{lastGamesPeace.price}$</h4>
                <div className='lastGameButtons'>
                    <StripeButton className='pay' price={lastGamesPeace.price}/>
                    <button className='details'>DETAILS</button>
                </div>
            </div>
        </div>
    )
}

export default LastGamesPeace;