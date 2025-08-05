import NavBar from "../components/NavBar"
import { albumsData, songsData } from "../assets/assets"
import AlbumCard from "../components/AlbumCard"
import SongCard from "../components/SongCard"

const HomePage = () => {
    return (
        <>
            <NavBar />
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
                <div className="flex overflow-auto">
                    {albumsData.map((item, index) => (
                        <AlbumCard key={index} name={item.name} image={item.image} desc={item.desc} id={item.id}/>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
                <div className="flex overflow-auto">
                    {songsData.map((item, index) => (
                        <SongCard key={index} name={item.name} image={item.image} desc={item.desc} id={item.id}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default HomePage