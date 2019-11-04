import React from 'react';
import css from './Homepage.module.scss';
import MainSlider from "../../components/MainSlider/MainSlider.component";
import LastNews from "../../components/LastNews/LastNews.component";
import LastGames from "../../components/LastGames/LastGames.component";

const Homepage = () => {
    return (
        <div className={css.homepage}>
            <MainSlider/>
            <LastNews/>
            <LastGames/>
        </div>
    )
}

export default Homepage;