import { combineReducers } from "redux";
import { fetchBreedReducer, fetchBreedsReducer, fetchReducer } from "./fetchStore";

export const rootReducer = combineReducers({
    fetchReducer,
    fetchBreedsReducer,
    fetchBreedReducer,
})

export type RootState = ReturnType<typeof rootReducer>