
import newsTypes from "./news.types";

const INITIAL_STATE = {
    news: null,
    newsIsFetching: false,
    newsErrorMessage: undefined,
}

const newsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case newsTypes.FETCH_NEWS_START: return {
            ...state,
            newsIsFetching: true
        }
        case newsTypes.FETCH_NEWS_SUCCESS: return {
            ...state,
            news: action.payload,
            newsIsFetching: false
        }
        case newsTypes.FETCH_NEWS_ERROR: return {
            ...state,
            newsIsFetching: false,
            newsErrorMessage: action.payload
        }
        default: return state
    }
}

export default newsReducer;

