import React, {Component} from 'react';
import css from './LastNews.module.scss';
import LastNewsPeace from "../LastNewsPeace/LastNewsPeace.component";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {shopSelectNews} from "../../redux/shop/shop.selectors";


class LastNews extends Component {

    render() {
        const responsive = {
            superLargeDesktop: {
                breakpoint: { max: 4000, min: 3000 },
                items: 5,
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 4,
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
            },
        };
        const {news} = this.props;
        return (

            <div className={css.news}>
                <div className={css.head}>
                    <h1>LAST NEWS</h1>
                </div>
                <Carousel  responsive={responsive} infinite={true}>
                    {news.filter((item, idx) => idx < 8).map((obj) => {return <LastNewsPeace key={obj.id} lastNewsInfo={obj}/>})}
                </Carousel>


            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    news : shopSelectNews,
});

export default connect(mapStateToProps)(LastNews);