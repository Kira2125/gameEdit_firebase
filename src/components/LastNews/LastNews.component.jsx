import React, {Component} from 'react';
import css from './LastNews.module.scss';
import izo1 from "../../images/NewsCarousel/1.jpg";
import izo2 from "../../images/NewsCarousel/2.jpg";
import izo3 from "../../images/NewsCarousel/4.jpg";
import izo4 from "../../images/NewsCarousel/5.jpg";
import izo5 from "../../images/NewsCarousel/6.jpg";
import izo6 from "../../images/NewsCarousel/7.jpg";
import izo7 from "../../images/NewsCarousel/8.jpg";
import izo8 from "../../images/NewsCarousel/9.jpg";
import izo9 from "../../images/NewsCarousel/wot.jpg";
import izo10 from "../../images/NewsCarousel/1.png";
import LastNewsPeace from "../LastNewsPeace/LastNewsPeace.component";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


class LastNews extends Component {
    constructor() {
        super();
        this.state = {
            lastNews: [{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed alias quia deserunt fuga",
                        header: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                        image: izo1,
                        id: 1},
                {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed alias quia deserunt fuga",
                    header: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    image: izo2,
                    id: 2},
                {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed alias quia deserunt fuga",
                    header: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    image: izo3,
                    id: 3},
                {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed alias quia deserunt fuga",
                    header: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    image: izo4,
                    id: 4},
                {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed alias quia deserunt fuga",
                    header: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    image: izo5,
                    id: 5},
                {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed alias quia deserunt fuga",
                    header: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    image: izo6,
                    id: 6},
                {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed alias quia deserunt fuga",
                    header: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    image: izo7,
                    id: 7},
                {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed alias quia deserunt fuga",
                    header: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    image: izo8,
                    id: 8},
                {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed alias quia deserunt fuga",
                    header: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    image: izo9,
                    id: 9},
                {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed alias quia deserunt fuga",
                    header: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    image: izo10,
                    id: 10},]
        }
    }

    render() {
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
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
        return (
            <div className={css.news}>
                <div className={css.head}>
                    <h1>LAST NEWS</h1>
                </div>
                <Carousel  responsive={responsive} infinite={true}>
                    {this.state.lastNews.map((obj) => {return <LastNewsPeace key={obj.id} lastNewsInfo={obj}/>})}
                </Carousel>


            </div>
        )
    }
}

export default LastNews;