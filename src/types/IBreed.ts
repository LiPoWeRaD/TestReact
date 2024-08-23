interface IBreed {
    bred_for: string
    breed_group: string
    country_code: string
    height: {
        imperial: string
        metric: string
    }
    id: string
    life_span: string
    name: string
    reference_image_id: string
    temperament: string
    weight: {
        imperial: string
        metric: string
    }
}

interface IInfo {
    breeds: IBreed
    height: {
        imperial: string
        metric: string
    }
    id: string
    url: string
    width: {
        imperial: string
        metric: string
    }
}

export default IBreed