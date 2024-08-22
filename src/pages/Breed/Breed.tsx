import { useParams } from "react-router-dom"
import { useActions } from "../../hooks/useActions"
import { useEffect, useState } from "react"
import { store } from "../../store"
import IBreeds from "../../types/IBreeds"
import IFact from "../../types/IFact"


const Breed = () => {
    const { q } = useParams()

    const { fetchBreed } = useActions()

    const [animal, setAnimal] = useState<IFact>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null as null | string)
    

    useEffect(() => {
        fetchBreed(q!)

        setAnimal(store.getState().fetchBreedReducer.breed)

    }, [])

    store.subscribe(() => {
        setAnimal(store.getState().fetchBreedReducer.breed)

        setLoading(store.getState().fetchBreedReducer.loading)

        setError(store.getState().fetchBreedReducer.error)
    })

    console.log(animal);
    
    

    return (
        <div>
            <p>{animal?.fact}</p>
        </div>
    )  
}

export default Breed