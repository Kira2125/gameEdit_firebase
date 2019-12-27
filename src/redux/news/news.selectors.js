import { createSelector } from 'reselect';


const newsSelector = state => state.news;

export const newsSelectorCollections = createSelector(
    [newsSelector],
    news => news.news
)


export const newsSelectNews = createSelector(
    [newsSelectorCollections],
    news => news ? news.news.items : null
)

export const selectFetching = createSelector(
    [newsSelector],
    news => news.isFetching
)

export const selectNewsIsLoaded = createSelector(
    [newsSelector],
    news => !!news.news
)




