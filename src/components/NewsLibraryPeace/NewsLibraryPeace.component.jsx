import React from 'react';
import css from '../NewsLibrary/NewsLibrary.module.scss';

const NewsLibraryPeace = ({NewsInfo}) => {
    return (
        <div className={css.peace}>
            <div className={css.izo} style={{backgroundImage: `url(${NewsInfo.Url})`}}/>
            <div className={css.text}>
                <h3>{NewsInfo.header}</h3>
                <p>{NewsInfo.text.substr(0, 100)}</p>
                <a href="">READ MORE</a>
            </div>
        </div>
    )
}

export default NewsLibraryPeace;