import { FC } from "react"
import { useNavigate } from "react-router-dom"


interface IProps {
    color?: string
}

const Back: FC<IProps> = ({ color = "black" }) => {

    const navigate = useNavigate()

    return (
        <button onClick={() => navigate(-1)} className={`absolute top-10 left-10 text-3xl text-${color}`}>Back</button>
    )
}

export default Back