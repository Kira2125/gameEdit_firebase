import React from 'react';
import '../LastNews/LastNews.styles.scss';

const LastNewsPeace = ({lastNewsInfo}) => {
    return (
        <div>
            <div className="izo" style={{backgroundImage: `url(${lastNewsInfo.image})`}}></div>
            <div className="text">
                <h3>{lastNewsInfo.header}</h3>
                <p>{lastNewsInfo.text}</p>
                <a href="" className="bnt btn-full">READ MORE</a>
            </div>
        </div>
    )
}

export default LastNewsPeace;