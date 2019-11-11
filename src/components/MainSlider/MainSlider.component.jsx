import React, {Component} from 'react';
import css from './MainSlider.module.scss';
import MainSliderGame from "../MainSliderGame/MainSliderGame";
import img1 from "../../images/MainSlider/battle.jpg";
import img2 from "../../images/MainSlider/creed.jpg";
import img3 from "../../images/MainSlider/batman.jpg";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class MainSlider extends Component {
    constructor() {
        super();
        this.state = {
            mainSliderGames: [{header: "BATTLEFIELD", description: "world newer be the same", image: img1, id: 1},
                {header: "ASSASSIN'S CREED UKRAINIAN STORYS", description: "when world was changed for always", image: img2, id: 2},
                {header: "BATMAN END OF THE BEGINNING", description: "it looks like beggining of the end", image: img3, id: 3},]
        }
    }
    render() {

        return (
            <Carousel className={css.carousel}
                      showThumbs={false} infiniteLoop={true}
                      showIndicators={false} showStatus={false}
                      emulateTouch={true}>
                   {this.state.mainSliderGames.map(obj => {return <MainSliderGame key={obj.id} gameInf={obj}/>})}
            </Carousel>
        )
    }
}

export default MainSlider;