import {ThunkDispatch} from "redux-thunk";

export interface Product {
    createdAt: string,
    name: string,
    avatar: string,
    id: string,
    description: string,
    rating: {
        rate: number,
        count: number
    },
    price: number,
    category: string
}

export interface ProductState {
    data: Product[];
    loading: boolean;
    error: string;
}

interface GET_PRODUCT_START {
    type: "GET_PRODUCT_START";
}

interface GET_PRODUCT_SUCCESS {
    type: "GET_PRODUCT_SUCCESS";
    payload: Product[];
}

interface GET_PRODUCT_ERROR {
    type: "GET_PRODUCT_ERROR";
}

export type ProductAction = GET_PRODUCT_START | GET_PRODUCT_SUCCESS | GET_PRODUCT_ERROR;
export type ProductDispatch = ThunkDispatch <ProductState, void, ProductAction>;



