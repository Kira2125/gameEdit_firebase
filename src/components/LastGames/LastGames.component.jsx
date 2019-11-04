import React from 'react';
import './LastGames.styles.scss';

const LastGames = () => {
    return (
        <div className='library'>
            <div className="li-head">
                <h1>bestsellers</h1>
            </div>
            <ul className="li-library">
                <li>
                    <div className="limg" id="img-1"></div>
                    <div className="feature">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, vero!</div>
                </li>
                <li>
                    <div className="limg" id="img-2"></div>
                    <div className="feature">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, vero!</div>
                </li>
                <li>
                    <div className="limg" id="img-3"></div>
                    <div className="feature">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, vero!</div>
                </li>
                <li>
                    <div className="limg" id="img-4"></div>
                    <div className="feature">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, vero!</div>
                </li>
                <li>
                    <div className="limg" id="img-5"></div>
                    <div className="feature">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, vero!</div>
                </li>
                <li>
                    <div className="limg" id="img-6"></div>
                    <div className="feature">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, vero!</div>
                </li>

            </ul>
        </div>
    )
};

export default LastGames;