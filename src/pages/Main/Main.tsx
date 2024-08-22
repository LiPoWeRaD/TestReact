import { FormEvent, useEffect, useState } from "react"
import { useActions } from "../../hooks/useActions"
import IAnimal from "../../types/IAnimal"
import { fetchPets } from "../../store/action-creators/AnimalsStore"
import { store } from "../../store"
import Breeds from "../../components/Breeds"


const Main = () => {
    

       



    return (
        <section className="container mx-auto">
            <Breeds />
        </section>
    )
}

export default Main
