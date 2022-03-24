import {Product, ProductAction, ProductState} from "../../types/product";

const defaultState: ProductState = {
    data:[],
    loading: false,
    error: '',
}

export const productReducer = (state: ProductState = defaultState , action: ProductAction) => {
    switch (action.type) {
        case 'GET_PRODUCT_START':
            return {...state, loading: true, error:""}
        case 'GET_PRODUCT_SUCCESS':
            return{...state, data: action.payload,loading: false}
        case 'GET_PRODUCT_ERROR':
            return {...state, loading: false, error: "Error fetching categories"}
    }
    return state
}

