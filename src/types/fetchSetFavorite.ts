import ISetFavorite from "./ISetFavorite"

export enum FETCH_SET_FAVORITE {
    FETCH_SET_FAVORITE_REQUEST = 'FETCH_SET_FAVORITE_REQUEST',
    FETCH_SET_FAVORITE_SUCCESS = 'FETCH_SET_FAVORITE_SUCCESS',
    FETCH_SET_FAVORITE_FAILURE = 'FETCH_SET_FAVORITE_FAILURE'
}

export type SetFavoriteState = {
    favorite: ISetFavorite,
    loading: boolean,
    error: null | string
}

export type SetFavoriteAction = {
        type: FETCH_SET_FAVORITE.FETCH_SET_FAVORITE_REQUEST
    } | {
        type: FETCH_SET_FAVORITE.FETCH_SET_FAVORITE_SUCCESS
        payload: ISetFavorite
    } | {
        type: FETCH_SET_FAVORITE.FETCH_SET_FAVORITE_FAILURE
        payload: string
    }