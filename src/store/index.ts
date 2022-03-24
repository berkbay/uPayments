import {combineReducers} from "redux";
import {productReducer} from "./reducers/productReducer";
import {ProductState} from "../types/product";

export interface AppState {
    products: ProductState;
    // categories: any;
}

const rootReducer = combineReducers<AppState>({
    products: productReducer
    // categories: () => {},
});

export default rootReducer;
