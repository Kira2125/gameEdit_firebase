import React, {Component} from 'react';
import GameLibrary from "../../components/GameLibrary/GameLibrary.component";
import  css from './GamesPage.module.scss';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {isLoadingSelector} from "../../redux/spinner/spinner.selectors";
import {updateCollectionsAC} from "../../redux/shop/shop.actions";
import {toggleSpinnerAC} from "../../redux/spinner/spinner.actions";
import {convertCollectionSnapshotToMap, firestore} from "../../firebase/firebase";
import WithSpinner from "../../components/withSpinner/WithSpinner.component";


const GamePageWithSpinner = WithSpinner(GameLibrary);

class GamePage extends Component {
    unsubscribeFromSnapshot = null;
    componentDidMount() {
        const {updateCollection, toggleLoading} = this.props;
        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            updateCollection(collectionsMap);
            toggleLoading(false);
        })
    }

    render() {

        return (
            <div>
                <GamePageWithSpinner isLoading={this.props.isLoading}/>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isLoading: isLoadingSelector
});

const mapDispatchToProps = (dispatch) => ({
    updateCollection: collectionMap => dispatch(updateCollectionsAC(collectionMap)),
    toggleLoading: toggle => dispatch(toggleSpinnerAC(toggle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);