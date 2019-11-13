import React from 'react';
import css from '../LastNews/LastNews.module.scss';

const LastNewsPeace = ({lastNewsInfo}) => {
    return (
        <div>
            <div className={css.izo} style={{backgroundImage: `url(${lastNewsInfo.Url})`}}/>
            <div className={css.text}>
                <h3>{lastNewsInfo.header}</h3>
                <p>{lastNewsInfo.text}</p>
                <a href="">READ MORE</a>
            </div>
        </div>
    )
}

export default LastNewsPeace;