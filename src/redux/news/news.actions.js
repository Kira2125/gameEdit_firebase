import newsTypes from "./news.types";
import {convertCollectionSnapshotToMap, firestore} from "../../firebase/firebase";

export const fetchNewsStart = () => ({
    type: newsTypes.FETCH_NEWS_START,
});

export const fetchNewsSuccess = collectionMap => ({
    type: newsTypes.FETCH_NEWS_SUCCESS,
    payload: collectionMap,
});

export const fetchNewsError = errorMessage => ({
    type: newsTypes.FETCH_NEWS_ERROR,
    payload: errorMessage,
});

export const fetchNewsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('news');
        dispatch(fetchNewsStart());
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            dispatch(fetchNewsSuccess(collectionsMap));
        })
            .catch(error => dispatch(fetchNewsError(error.message)));

    }
}
