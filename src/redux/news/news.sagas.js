import {takeEvery, call, put} from 'redux-saga/effects';
import newsTypes from "./news.types";
import {convertCollectionSnapshotToMap, firestore} from "../../firebase/firebase";
import {fetchNewsError, fetchNewsSuccess} from "./news.actions";



export function* fetchNewsAsync() {

    try{
        const collectionRef = firestore.collection('news');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
        yield put(fetchNewsSuccess(collectionsMap)) //dispatch in redux sagas
    }
    catch (e) {
        yield (fetchNewsError(e.message));
    }

}

export function* fetchNewsStartGen() {
    yield takeEvery(newsTypes.FETCH_NEWS_START, fetchNewsAsync);
}