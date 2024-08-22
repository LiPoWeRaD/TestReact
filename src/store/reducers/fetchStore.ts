import { FETCH_BREEDS, BreedsAction, BreedsState } from "../../types/fetchBreeds"
import { FETCH_PETS, PetsAction, PetsState} from "../../types/fetchPets"
import { FETCH_BREED, BreedAction, BreedState } from "../../types/fetchBreed"
import IFact from "../../types/IFact"

const initialPetsState: PetsState = {
    animal: [],
    loading: false,
    error: null
}

const initialBreedsState: BreedsState = {
    breeds: [],
    page: 0,
    loading: false,
    error: null
}

const initialBreedState: BreedState = {
    breed: {id: '0', title: '', fact: '', breed_id: '0'},
    page: 0,
    loading: false,
    error: null
}

export const fetchBreedReducer = (state = initialBreedState, action: BreedAction) => {
    switch (action.type) {
        case FETCH_BREED.FETCH_BREED_REQUEST:
            return { ...state, loading: true }
        case FETCH_BREED.FETCH_BREED_SUCCESS:
            return { ...state, breed: action.payload, loading: false, error: null }
        case FETCH_BREED.FETCH_BREED_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

export const fetchReducer = (state = initialPetsState, action: PetsAction) => {
    switch (action.type) {
        case FETCH_PETS.FETCH_PETS_REQUEST:
            return { ...state, loading: true }
        case FETCH_PETS.FETCH_PETS_SUCCESS:
            return { ...state, animal: action.payload, loading: false, error: null }
        case FETCH_PETS.FETCH_PETS_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

export const fetchBreedsReducer = (state = initialBreedsState, action: BreedsAction) => {
    switch (action.type) {
        case FETCH_BREEDS.FETCH_BREEDS_REQUEST:
            return { ...state, loading: true }
        case FETCH_BREEDS.FETCH_BREEDS_SUCCESS:
            return { ...state, breeds: action.payload, page: state.page, loading: false, error: null }
        case FETCH_BREEDS.FETCH_BREEDS_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}