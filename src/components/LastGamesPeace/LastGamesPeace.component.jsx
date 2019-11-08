import React from 'react';
import '../LastGames/LastGames.styles.scss';

const LastGamesPeace = ({lastGamesPeace}) => {
    return (
        <div>
            <div className="limg" style={{backgroundImage: `url(${lastGamesPeace.image})`}}></div>
            <div className="feature">{lastGamesPeace.header}
            </div>
        </div>
    )
}

export default LastGamesPeace;