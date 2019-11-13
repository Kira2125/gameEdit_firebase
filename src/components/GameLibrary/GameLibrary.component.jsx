import React, {Component} from 'react';
import css from './GameLibrary.module.scss';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {shopSelectGames} from "../../redux/shop/shop.selectors";
import TheGame from "../TheGame/TheGame.component";


class GameLibrary extends Component {
    render() {
        const {collection} = this.props;
        console.log(collection);
        return (
            <div className={css.library} style={{backgroundImage:
                    `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${collection[6].Url})`}}>
                <ul className={css.liLibrary}>
                    {collection.map((obj) => {return <li key={obj.id}><TheGame Games={obj}/></li>})}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    collection: shopSelectGames,
});

export default connect(mapStateToProps)(GameLibrary);