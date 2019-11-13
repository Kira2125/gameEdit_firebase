import { createSelector } from 'reselect';


const shopSelector = state => state.shop;

export const shopSelectorCollections = createSelector(
    [shopSelector],
    shop => shop.collections
)


export const shopSelectMainSlider = createSelector(
    [shopSelectorCollections],
    collections => collections ? collections.mainslider.items : null
)

export const shopSelectGames = createSelector(
    [shopSelectorCollections],
    collections => collections ? collections.games.items : null
)

export const shopSelectNews = createSelector(
    [shopSelectorCollections],
    collections => collections ? collections.news.items : null
)



