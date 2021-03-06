import {ThunkDispatch} from "redux-thunk";

export interface Product {
    createdAt: Date,
    name: string,
    avatar: string,
    id: any,
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

export interface ProductForm {
    name: string,
    avatar: string,
    description: string,
    price: number,
    category: string,
    personEmail: string
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

interface ADD_PRODUCT_START {
    type: "ADD_PRODUCT_START"
}

interface ADD_PRODUCT_SUCCESS {
    type: "ADD_PRODUCT_SUCCESS"
    payload: Product[];
}

interface ADD_PRODUCT_ERROR {
    type: "ADD_PRODUCT_ERROR"
}

interface DELETE_PRODUCT_START {
    type: "DELETE_PRODUCT_START"
}

interface DELETE_PRODUCT_SUCCESS {
    type: "DELETE_PRODUCT_SUCCESS"
    payload: number;
}

interface DELETE_PRODUCT_ERROR {
    type: "DELETE_PRODUCT_ERROR"
}

export type ProductAction =
    GET_PRODUCT_START |
    GET_PRODUCT_SUCCESS |
    GET_PRODUCT_ERROR |
    ADD_PRODUCT_START |
    ADD_PRODUCT_SUCCESS |
    ADD_PRODUCT_ERROR |
    DELETE_PRODUCT_START |
    DELETE_PRODUCT_SUCCESS |
    DELETE_PRODUCT_ERROR;

export type ProductDispatch = ThunkDispatch <ProductState, void, ProductAction>;



