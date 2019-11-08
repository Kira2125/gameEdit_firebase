import React, {Component} from 'react';
import css from './MainSlider.module.scss';
import MainSliderGame from "../MainSliderGame/MainSliderGame";
import img1 from "../../images/MainSlider/battle.jpg";
import img2 from "../../images/MainSlider/creed.jpg";
import img3 from "../../images/MainSlider/batman.jpg";

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
            <div className={css.slider}>
                <ul id="slider-carousel">
                    {this.state.mainSliderGames.map((obj) => {return <li key={obj.id} className={css.img}
                                                                         style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${obj.image}`}}>
                                                                        <MainSliderGame gameInf={obj}/></li>})}
                </ul>
                <a className={css.prev} id="foo2_prev" href="#"><span><i className="fas fa-arrow-left"></i></span></a>
                <a className={css.next} id="foo2_next" href="#"><span><i className="fas fa-arrow-right"></i></span></a>
            </div>
        )
    }
}

export default MainSlider;