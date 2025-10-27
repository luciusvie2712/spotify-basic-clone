import { useContext } from "react"
import { PlayerContext } from "../context/PlayerContext"

const SongCard = ({id, name, desc, image}) => {

    const { playWithId } = useContext(PlayerContext)

    return (
        <div onClick={() => playWithId(id)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#2b2b2b]">
            <img src={image} className="rounded" />
            <p className="font-bold mt-2 mb-1">{name}</p>
            <p className="font-slate-200 text-sm">{desc}</p>
        </div>
    )
}

export default SongCard