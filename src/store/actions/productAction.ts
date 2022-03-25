import {ProductDispatch, Product, ProductForm} from "../../types/product";
import api from "../../utils/api";

export const getProduct = () => async (dispacth: ProductDispatch) => {
    dispacth({type: "GET_PRODUCT_START"});
    try {
        const response = await api.get<Product[]>("/products");
        dispacth({type: "GET_PRODUCT_SUCCESS", payload: response.data} );
    } catch {
        dispacth({type: "GET_PRODUCT_ERROR"})
    }
}

export const addProduct = (form:ProductForm) => async (dispatch: ProductDispatch) => {
    dispatch({type: "ADD_PRODUCT_START"})
    try {
        const response = await api.post<Product[]>("products");
        dispatch({ type: "ADD_PRODUCT_SUCCESS", payload: response.data})
    } catch {
        dispatch({type: "ADD_PRODUCT_ERROR"})
    }
}
