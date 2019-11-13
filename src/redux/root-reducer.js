import {combineReducers} from "redux";
import userReducer from "./user/user.reducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import shopReducer from "./shop/shop.reducer";
import spinnerReducer from "./spinner/spinner.reducer";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    shop: shopReducer,
    spinner: spinnerReducer,
})

export default persistReducer(persistConfig, rootReducer);