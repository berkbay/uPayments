import {CategoriesDispatch, Categories} from "../../types/categories";
import api from "../../utils/api";

export const getCategories = () => async (dispacth: CategoriesDispatch) => {
    dispacth({type: "GET_CATEGORIES_START"});
    try {
        const response = await api.get<Categories[]>("/categories");
        dispacth({type: "GET_CATEGORIES_SUCCESS", payload: response.data} );
    } catch {
        dispacth({type: "GET_CATEGORIES_ERROR"})
    }
}
