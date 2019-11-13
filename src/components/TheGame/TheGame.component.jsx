import React from 'react';
import css from '../GameLibrary/GameLibrary.module.scss';
import StripeButton from "../stripe-button/stripe-button.component";

const TheGame = ({Games}) => {
    return (
        <div>
            <div className={css.limg} style={{backgroundImage: `url(${Games.Url})`}}></div>
            <div className={css.feature}>
                <h4>{Games.header}</h4>
                <p>{Games.text.substr(0, 50)}...</p>
                <h4>{Games.price}$</h4>
                <div className={css.buttons}>
                    <StripeButton className={css.pay} price={Games.price}/>
                    <button className={css.details}>DETAILS</button>
                </div>
            </div>
        </div>
    )
}

export default TheGame;