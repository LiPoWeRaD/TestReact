import { Link } from "react-router-dom";
import Back from "../../ui/Back/Back"
import { reactLocalStorage } from 'reactjs-localstorage';

const Likes = () => {

    const LikeAmimal = JSON.parse(localStorage.getItem('animal') || '{}');

    // reactLocalStorage.clear();

    return (
        <div className="relative container mx-auto px-52 py-10 flex flex-col">
            <Back color="white" />
            <div className="flex flex-wrap justify-normal gap-8">
                {Object.keys(LikeAmimal).map((key) => (
                    <div className="" key={key}>
                        <Link to={`/breed/${key}`} className="text-3xl text-center"><img className="w-64 h-64 bg-slate-600 rounded-full" src={`https://cdn2.thedogapi.com/images/${LikeAmimal[key]}.jpg`} alt="" /></Link>
                    </div>
                ))}
            </div>

        </div>
    )
}


{/* <Link onClick={removeAllSearchParams} to={`/breed/${item.id}`} className="text-3xl text-center">
        <h2 className="p-2 text-4xl font-bold text-center text-white bg-slate-700 rounded-2xl bg-opacity-60">{item.name ? item.name : "Не определено"}</h2>
        <img className="absolute top-0 left-0 w-full h-full rounded-2xl -z-10" src={item.reference_image_id ? `https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg` : ""} alt="" />
    </Link> */}

export default Likes