import React from 'react';
import css from "../MainSlider/MainSlider.module.scss";

function MainSliderGame({gameInf}) {
    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${gameInf.Url})`}} className={css.container}>

                <div className={css.description}>
                <h1><span>{gameInf.header}</span></h1>
                <p>{gameInf.text}</p><br></br>

                <i className="fab fa-windows"></i>
                <i className="fab fa-playstation"></i>
                <i className="fab fa-xbox"></i><br></br><br></br>

                <a href="" className={css.btnHalf}>PRE ORDER NOW</a>
                <a href="" className={css.btnFull}>MORE GAMES FROM DICE</a>
                </div>
        </div>
    )
}

export default MainSliderGame;