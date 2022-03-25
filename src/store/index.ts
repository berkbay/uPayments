import {combineReducers} from "redux";
import {productReducer} from "./reducers/productReducer";
import {ProductState} from "../types/product";
import {CategoriesState} from "../types/categories";
import {categoriesReducer} from "./reducers/categoriesReducer";

export interface AppState {
    products: ProductState;
    categories: CategoriesState;
}

const rootReducer = combineReducers<AppState>({
    products: productReducer,
    categories: categoriesReducer
});

export default rootReducer;
