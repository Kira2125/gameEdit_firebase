import React, {Component} from 'react';
import css from './NewsPage.module.scss';
import {convertCollectionSnapshotToMap, firestore} from "../../firebase/firebase";
import NewsLibrary from "../../components/NewsLibrary/NewsLibrary.component";
import {createStructuredSelector} from "reselect";
import {isLoadingSelector} from "../../redux/spinner/spinner.selectors";
import {toggleSpinnerAC} from "../../redux/spinner/spinner.actions";
import {connect} from "react-redux";
import WithSpinner from "../../components/withSpinner/WithSpinner.component";
import {updateCollectionsAC} from "../../redux/shop/shop.actions";


const NewsLibraryWithSpinner = WithSpinner(NewsLibrary);

class NewsPage extends Component {
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
                <NewsLibraryWithSpinner isLoading={this.props.isLoading}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);