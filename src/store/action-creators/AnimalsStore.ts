import { Dispatch } from "redux";
import axios from "axios";
import { PetsAction, FETCH_PETS } from "../../types/fetchPets";
import { BreedsAction, FETCH_BREEDS } from "../../types/fetchBreeds";
import { BreedAction, FETCH_BREED } from "../../types/fetchBreed";
import { api } from "../../api/api";

const API = axios.create({
    // baseURL: api,
    baseURL: "https://api.thecatapi.com/v1/images/search?limit=10",
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: false,
    params: {
        api_key: api
    }
}); 



export const fetchBreed = (id: string) => {
    return async (dispatch: Dispatch<BreedAction>) => {
        dispatch({ type: FETCH_BREED.FETCH_BREED_REQUEST });
        await API.get(`https://api.thedogapi.com/v1/breeds/${id}`).then(res => {
            dispatch({ type: FETCH_BREED.FETCH_BREED_SUCCESS, payload: res.data });
        }).catch(err => {
            dispatch({ type: FETCH_BREED.FETCH_BREED_FAILURE, payload: err.message });
        })
    };
}
 
export const fetchPets = () => {
    return async (dispatch: Dispatch<PetsAction>) => {
        dispatch({ type: FETCH_PETS.FETCH_PETS_REQUEST });
        await API.get("https://api.thedogapi.com/v1/images/search?limit=10").then(res => {
            dispatch({ type: FETCH_PETS.FETCH_PETS_SUCCESS, payload: res.data });
        }).catch(err => {
            dispatch({ type: FETCH_PETS.FETCH_PETS_FAILURE, payload: err.message });
        })
    };
}


export const fetchBreeds = (limit: number = 10, page: number = 0) => {
    return async (dispatch: Dispatch<BreedsAction>) => {
        dispatch({ type: FETCH_BREEDS.FETCH_BREEDS_REQUEST });
        await API.get(`https://api.thedogapi.com/v1/breeds?limit=${limit}&page=${page}`).then(res => {
            dispatch({ type: FETCH_BREEDS.FETCH_BREEDS_SUCCESS, payload: res.data });
        }).catch(err => {
            dispatch({ type: FETCH_BREEDS.FETCH_BREEDS_FAILURE, payload: err.message });
        })
    };
}
