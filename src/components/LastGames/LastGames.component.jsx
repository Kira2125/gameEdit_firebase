import React, {Component} from 'react';
import './LastGames.styles.scss';
import LastGamesPeace from "../LastGamesPeace/LastGamesPeace.component";
import $ from 'jquery';
import jQuery from 'jquery';
import {createStructuredSelector} from "reselect";
import {shopSelectGames} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";

class LastGames extends Component {

    render() {
        jQuery(document).ready(function () {
            "use strict";

            $('.li-library li .limg').mouseover(function(){
                var getImageLink = $(this).css("background-image");

                $('.library').css("background-image", "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))," + getImageLink);
            })
        })
        const {collection} = this.props;
        return (

            <div className='library' style={{backgroundImage:
                    `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${collection.Url})`}}>
                <div className="li-head">
                    <h1>new games</h1>
                </div>
                <ul className="li-library">
                    {collection.filter((item, idx) => idx < 8).map((obj) => {return <li key={obj.id}><LastGamesPeace lastGamesPeace={obj}/></li>})}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    collection: shopSelectGames,
})

export default connect(mapStateToProps)(LastGames);