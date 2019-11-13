import React, {Component} from 'react';
import css from './MainSlider.module.scss';
import MainSliderGame from "../MainSliderGame/MainSliderGame";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {shopSelectMainSlider} from "../../redux/shop/shop.selectors";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";

class MainSlider extends Component {


    render() {
        const {collection} = this.props;
        return (
            <Carousel className={css.carousel}
                      showThumbs={false} infiniteLoop={true}
                      showIndicators={false} showStatus={false}
                      emulateTouch={true}>
                   {collection.map(obj => {return <MainSliderGame key={obj.id} gameInf={obj}/>})}
            </Carousel>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    collection: shopSelectMainSlider,
})

export default connect(mapStateToProps)(MainSlider);