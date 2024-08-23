import { FETCH_BREEDS, BreedsAction, BreedsState } from "../../types/fetchBreeds"
import { FETCH_PETS, PetsAction, PetsState} from "../../types/fetchPets"
import { FETCH_BREED, BreedAction, BreedState } from "../../types/fetchBreed"
import { FETCH_SET_FAVORITE, SetFavoriteAction, SetFavoriteState } from "../../types/fetchSetFavorite"

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
    breed: {id: '0', name: '', weight: {imperial: '', metric: ''}, 
            height: {imperial: '', metric: ''}, life_span: '', bred_for: '', 
            breed_group: '', country_code: '', reference_image_id: '', temperament: '',
            adaptability: 0, affection_level: 0, child_friendly: 0,
            dog_friendly: 0, energy_level: 0, grooming: 0, health_issues: 0,
            intelligence: 0, social_needs: 0, stranger_friendly: 0, vocalisation: 0,
            experimental: 0, hairless: 0, natural: 0, rare: 0, rex: 0, suppressed_tail: 0,
            short_legs: 0, wikipedia_url: '', alt_names: '', cfa_url: '', country_codes: '',
            description: '', hypoallergenic: 0, indoor: 0, 
            images: { id: '0', width: 0, height: 0, url: ''},
            laps: 0, origin: '', shedding_level: 0, vcahospitals_url: '', vetstreet_url: '',},
    page: 0,
    loading: false,
    error: null
}

// const initialBreedState: BreedState = {
//     breed: ,
//     page: 0,
//     loading: false,
//     error: null
// }

const initialSetFavoriteState: SetFavoriteState = {
    favorite: {id: 0, message: ''},
    loading: false,
    error: null
}

export const fetchSetFavoriteReducer = (state = initialSetFavoriteState, action: SetFavoriteAction) => {
    switch (action.type) {
        case FETCH_SET_FAVORITE.FETCH_SET_FAVORITE_REQUEST:
            return { ...state, loading: true }
        case FETCH_SET_FAVORITE.FETCH_SET_FAVORITE_SUCCESS:
            return { ...state, favorite: action.payload, loading: false, error: null }
        case FETCH_SET_FAVORITE.FETCH_SET_FAVORITE_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
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