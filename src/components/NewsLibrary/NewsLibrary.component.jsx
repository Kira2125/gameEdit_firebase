import React from 'react';
import css from './NewsLibrary.module.scss';
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import NewsLibraryPeace from "../NewsLibraryPeace/NewsLibraryPeace.component";
import {shopSelectNews} from "../../redux/shop/shop.selectors";




const NewsLibrary = ({news}) => {

    return (
        <div className={css.news}>

            <div className={css.block}>
                {news.map((obj) => {return <NewsLibraryPeace key={obj.id} NewsInfo={obj}/>})}
            </div>


        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    news : shopSelectNews,
});

export default connect(mapStateToProps)(NewsLibrary);