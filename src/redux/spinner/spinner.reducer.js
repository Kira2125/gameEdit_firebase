import spinnerTypes from "./spinner.types";


const INITIAL_STATE = {
    loading: true
}

const spinnerReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case spinnerTypes.TOGGLE_LOAD: return {
            ...state,
            loading: action.payload
        }
        default: return state
    }
}

export default spinnerReducer;

