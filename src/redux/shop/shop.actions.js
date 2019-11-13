import shopTypes from "./shop.types";

export const updateCollectionsAC = (collectionMap) => ({
    type: shopTypes.UPDATE_COLLECTIONS,
    payload: collectionMap,
});