import { useParams } from "react-router-dom"
import { useActions } from "../../hooks/useActions"
import { useEffect, useState } from "react"
import { store } from "../../store"
import IBreeds from "../../types/IBreeds"
import Like from '../../ui/like/like'
import Back from "../../ui/Back/Back"

const Breed = () => {
    const { q } = useParams()
    const { fetchBreed } = useActions()

    const [animal, setAnimal] = useState<IBreeds>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null as null | string)

    useEffect(() => {
        fetchBreed(q!)
        setAnimal(store.getState().fetchBreedReducer.breed)
    }, [])

    const [like, setLike] = useState(false)

    const LikeAmimal = JSON.parse(localStorage.getItem('animal') || '{}');

    useEffect(() => {
        setLike(LikeAmimal.hasOwnProperty(animal?.id))
    }, [LikeAmimal])

    store.subscribe(() => {
        setAnimal(store.getState().fetchBreedReducer.breed)

        setLoading(store.getState().fetchBreedReducer.loading)

        setError(store.getState().fetchBreedReducer.error)
    })    

    if (loading) {
        return <h1 className="text-5xl text-center">Loading...</h1>
    }
    
    if (error) {
        return <h1 className="text-5xl text-center">{error}</h1>
    }

    if (!animal && !loading && !error) {
        return <h1 className="text-5xl text-center">No data</h1>
    }

    if (!animal) {
        return <h1 className="text-5xl text-center">No data</h1>
    }   
    

    const hanldeLike = (animal: IBreeds) => {
        if (LikeAmimal[animal.id]) {
            delete LikeAmimal[animal.id]
            setLike(false)
        } else {
            LikeAmimal[animal.id] = animal.reference_image_id
            setLike(true)
        }

        localStorage.setItem('animal', JSON.stringify(LikeAmimal))
    }  
    
    return (
        <div className="relative container mx-auto flex flex-col justify-center items-center text-white">
            <Back />
            <h2 className="mb-5 text-5xl font-bold">{animal.name}</h2>
            <div className="flex mb-5 gap-x-4 justify-between items-center">
                <img className="h-96 w-96 bg-slate-600 rounded-full" src={animal.reference_image_id ? `https://cdn2.thedogapi.com/images/${animal.reference_image_id}.jpg` : ""} alt="" />
                <div className="flex p-4 flex-col border-2 border-slate-600 ">
                    <h3 className="text-4xl">Temperament</h3>
                    {animal.temperament.split(",").map((t, index) => <p className="text-2xl" key={index}>{t}</p>)}
                </div>
            </div>
            <p className="flex gap-x-4 items-center text-3xl">Мне нравится <button onClick={() => hanldeLike(animal)}><Like like={like} /></button></p>

        </div>   
    )  
}

export default Breed