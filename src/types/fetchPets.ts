import IAnimal from "./IAnimal"


export enum FETCH_PETS {
    FETCH_PETS_REQUEST = 'FETCH_PETS_REQUEST',
    FETCH_PETS_SUCCESS = 'FETCH_PETS_SUCCESS',
    FETCH_PETS_FAILURE = 'FETCH_PETS_FAILURE'
}

export type PetsState = {
    animal: IAnimal[],
    loading: boolean,
    error: null | string
}

export type PetsAction = {
        type: FETCH_PETS.FETCH_PETS_REQUEST
    } | {
        type: FETCH_PETS.FETCH_PETS_SUCCESS
        payload: IAnimal[]
    } | {
        type: FETCH_PETS.FETCH_PETS_FAILURE
        payload: string
    }