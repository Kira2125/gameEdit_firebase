import React, {Component} from 'react';
import css from './Homepage.module.scss';
import MainSlider from "../../components/MainSlider/MainSlider.component";
import LastNews from "../../components/LastNews/LastNews.component";
import LastGames from "../../components/LastGames/LastGames.component";
import $ from 'jquery';
import jQuery from 'jquery';

class Homepage extends Component {
    componentDidMount() {
        jQuery(document).ready(function () {
            "use strict";
            $('#slider-carousel').caroufredsel({
                prev: '#foo2_prev',
                next: '#foo2_next',
                responsive: true,
                width: '100%',
                circular: true,
                scroll: {
                    items: 1,
                    duration: 500,
                    pauseOnHover: true
                },
                auto: true,
                items:
                    {
                        visible: {
                            min: 1,
                            max: 1
                        },
                        height: "variable"
                    },
                pagination: {
                    container: ".sliderpager",
                    pageAnchorBuilder: false
                }
            });

            $('.li-library li .limg').mouseover(function(){
                var getImageLink = $(this).css("background-image");

                $('.library').css("background-image", "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))," + getImageLink);
            })

            $('.slider-carousel').carouFredSel({
                prev: '#foo1_prev',
                next: '#foo1_next',
                responsive: true,
                width: '100%',
                circular: true,
                scroll:{
                    items:
                        {

                            visible:
                                {
                                    min: 1,
                                    max: 3
                                }
                        },
                    easing          : "quadratic",
                    duration        : 700,
                    pauseOnHover: true
                },
                auto: true,
                items:
                    {
                        width: 551,
                        visible:
                            {
                                min: 1,
                                max: 5
                            },
                        height: "variable"
                    },

                swipe: {
                    onMouse: true,
                    onTouch: true
                }
            });

        })

    }

    render() {
        return (
            <div className={css.homepage}>
                <MainSlider/>
                <LastNews/>
                <LastGames/>
            </div>
        )
    }
}

export default Homepage;