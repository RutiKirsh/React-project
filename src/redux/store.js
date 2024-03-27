import {createStore} from "redux";
import { productsReducer } from "./reducers/ProductsReducer";
import { allReducers } from "./reducers";
const store = createStore(
    allReducers
);
store.getState();
export default store;
