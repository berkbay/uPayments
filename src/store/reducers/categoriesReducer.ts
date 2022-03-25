import {CategoriesAction, CategoriesState} from "../../types/categories";

const defaultState: CategoriesState = {
    data: [],
    loading: false,
    error: '',
}

export const categoriesReducer = (state: CategoriesState = defaultState, action: CategoriesAction) => {
    switch (action.type) {
        case "GET_CATEGORIES_START":
            return {...state, loading: true, error:""}
        case "GET_CATEGORIES_SUCCESS":
            return {...state, loading: false, data:action.payload}
        case "GET_CATEGORIES_ERROR":
            return {...state, loading: false, error:"Error fetching categories"}
    }

    return state
}
