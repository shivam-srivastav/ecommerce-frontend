import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import product from "./ProductReducer/ProductReducer";
import user from './UserReducer/UserReducer';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    product,
    user
})
export default rootReducer;