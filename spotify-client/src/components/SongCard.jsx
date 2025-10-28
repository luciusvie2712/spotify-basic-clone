import { useContext } from "react"
import { PlayerContext } from "../context/PlayerContext"

const SongCard = ({ id, name, desc, image }) => {
  const { songs, playWithId } = useContext(PlayerContext)

  const handlePlay = () => {
    const index = songs.findIndex(song => song._id === id)
    if (index !== -1) playWithId(index)
  }

  return (
    <div
      onClick={handlePlay}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#2b2b2b]"
    >
      <img src={image} alt={name} className="rounded" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-400 text-sm truncate">{desc}</p>
    </div>
  )
}

export default SongCard
