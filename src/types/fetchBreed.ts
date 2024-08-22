import IBreeds from "./IBreeds"
import IFact from "./IFact"


export enum FETCH_BREED {
    FETCH_BREED_REQUEST = 'FETCH_BREED_REQUEST',
    FETCH_BREED_SUCCESS = 'FETCH_BREED_SUCCESS',
    FETCH_BREED_FAILURE = 'FETCH_BREED_FAILURE'
}

export type BreedState = {
    breed: IFact,
    page: number,
    loading: boolean,
    error: null | string
}

export type BreedAction = {
        type: FETCH_BREED.FETCH_BREED_REQUEST
    } | {
        type: FETCH_BREED.FETCH_BREED_SUCCESS
        payload: IFact
    } | {
        type: FETCH_BREED.FETCH_BREED_FAILURE
        payload: string
    }