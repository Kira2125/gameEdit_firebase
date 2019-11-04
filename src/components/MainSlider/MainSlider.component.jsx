import React from 'react';
import css from './MainSlider.module.scss';

const MainSlider = () => {
    return (
        <div className={css.slider}>
            <ul id="slider-carousel">
                <li className={css.img1}>
                    <h1><span>BATTLEFIELD</span> NEW ORDER</h1>
                    <p>world newer be the same</p><br></br>

                    <i className="fab fa-windows"></i>
                    <i className="fab fa-playstation"></i>
                    <i className="fab fa-xbox"></i><br></br><br></br>

                    <a href="" className={css.btnHalf}>PRE ORDER NOW</a>
                    <a href="" className={css.btnFull}>MORE GAMES FROM DICE</a>
                </li>
                <li className={css.img2}>
                    <h1>ASSASSIN'S CREED UKRAINIAN STORYS</h1>
                    <p>when world was changed for always</p><br></br>

                    <i className="fab fa-windows"></i>
                    <i className="fab fa-playstation"></i>
                    <i className="fab fa-xbox"></i><br></br><br></br>

                    <a href="" className={css.btnHalf}>PRE ORDER NOW</a>
                    <a href="" className={css.btnFull}>MORE GAMES FROM UBISOFT</a>
                </li>
                <li className={css.img3}>
                    <h1>BATMAN END OF THE BEGINNING</h1>
                    <p>it looks like beggining of the end</p><br></br>

                    <i className="fab fa-windows"></i>
                    <i className="fab fa-playstation"></i>
                    <i className="fab fa-xbox"></i><br></br><br></br>

                    <a href="" className={css.btnHalf}>PRE ORDER NOW</a>
                    <a href="" className={css.btnFull}>MORE GAMES FROM ROCKSTEADY</a>
                </li>

            </ul>
            <a className={css.prev} id="foo2_prev" href="#"><span><i className="fas fa-arrow-left"></i></span></a>
            <a className={css.next} id="foo2_next" href="#"><span><i className="fas fa-arrow-right"></i></span></a>
        </div>
    )
}

export default MainSlider;