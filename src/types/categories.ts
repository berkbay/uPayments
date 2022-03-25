import {ThunkDispatch} from "redux-thunk";

export interface Categories {
    createdAt: Date,
    name: string,
    id: number
}

export interface CategoriesState {
    data: Categories[]
    loading: boolean,
    error: string
}

interface GET_CATEGORIES_START {
    type: "GET_CATEGORIES_START"
}

interface GET_CATEGORIES_SUCCESS {
    type: "GET_CATEGORIES_SUCCESS"
    payload: Categories[],
}

interface GET_CATEGORIES_ERROR {
    type: "GET_CATEGORIES_ERROR"
}

export type CategoriesAction = GET_CATEGORIES_START | GET_CATEGORIES_SUCCESS | GET_CATEGORIES_ERROR;
export type CategoriesDispatch = ThunkDispatch<CategoriesState, void, CategoriesAction>
