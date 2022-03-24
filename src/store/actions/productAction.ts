import {ProductDispatch, Product} from "../../types/product";
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
