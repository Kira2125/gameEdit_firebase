
import spinnerTypes from "./spinner.types";


export const toggleSpinnerAC = (toggle) => ({
    type: spinnerTypes.TOGGLE_LOAD,
    payload: toggle,
});