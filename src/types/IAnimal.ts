import IBreeds from "./IBreeds"

interface IAnimal {
    id: string
    url: string
    breeds: IBreeds[]
    width: number
    height: number
    // favorite: boolean
}

export default IAnimal