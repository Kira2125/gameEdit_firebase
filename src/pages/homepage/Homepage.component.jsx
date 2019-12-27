import React, {useEffect} from 'react';
import css from './Homepage.module.scss';
import {connect} from "react-redux";
import {fetchCollectionsStart} from "../../redux/shop/shop.actions";
import ContainerMainSlider from "../../components/MainSlider/MainSlider.container.component";
import ContainerLastNews from "../../components/LastNews/LastNews.container.component";
import ContainerLastGames from "../../components/LastGames/LastGames.contaniner.component";



const Homepage = ({fetchCollectionsStart}) => {

        useEffect(() => {
            fetchCollectionsStart();
        }, [fetchCollectionsStart]);
        return (
            <div className={css.homepage}>
                <ContainerMainSlider/>
                <ContainerLastNews/>
                <ContainerLastGames/>
            </div>
        )

}


const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Homepage);