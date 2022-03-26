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

export const addProducts = (addProduct:ProductForm) => async (dispatch: ProductDispatch) => {
    dispatch({type: "ADD_PRODUCT_START"})
    try {
        const response = await api.post<Product[]>("products", addProduct);
        dispatch({ type: "ADD_PRODUCT_SUCCESS", payload: response.data})
    } catch {
        dispatch({type: "ADD_PRODUCT_ERROR"})
    }
}

export const deleteProducts = (productId: number) => async (dispatch: ProductDispatch) => {
    dispatch({type: "DELETE_PRODUCT_START"})
    try {
        await api.delete("/products/" + productId)
        dispatch({type: "DELETE_PRODUCT_SUCCESS", payload: productId})
    }catch{
        dispatch({type: "DELETE_PRODUCT_ERROR"})
    }
}
