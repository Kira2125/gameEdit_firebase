import { createSelector } from 'reselect';


const spinnerSelector = state => state.spinner;

export const isLoadingSelector = createSelector(
    [spinnerSelector],
    shop => shop.loading
)

