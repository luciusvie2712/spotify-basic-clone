import NavBar from "../components/NavBar"
import AlbumCard from "../components/AlbumCard"
import SongCard from "../components/SongCard"
import { getListAlbumAPI, getListSongAPI } from "../utils/api.customize"
import { useEffect, useState } from "react"

const HomePage = () => {
    const [albums, setAlbums] = useState([])
    const [songs, setSongs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [albumRes, songRes] = await Promise.all([
                    getListAlbumAPI(),
                    getListSongAPI()
                ]);
                console.log(songRes)

                if (albumRes?.success) setAlbums(albumRes.data)
                if (songRes?.success) setSongs(songRes.data)
            } catch (err) {
                console.error("Error fetching data:", err)
            } finally {
                setLoading(false)
            }
        };

        fetchData()
    }, [])

    if (loading) {
        return (
            <div className="text-center text-gray-400 mt-10">
                Loading music data...
            </div>
        )
    }
    return (
        <>
            <NavBar />
            <div className="mb-8">
                <h1 className="my-5 font-bold text-2xl">Featured Albums</h1>
                <div className="flex overflow-auto gap-4">
                    {albums.map((item) => (
                        <AlbumCard
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            image={item.image}
                            desc={item.description}
                        />
                    ))}
                </div>
            </div>

            <div className="mb-8">
                <h1 className="my-5 font-bold text-2xl">Featured Songs</h1>
                <div className="flex overflow-auto gap-4">
                    {songs.map((item) => (
                        <SongCard
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            image={item.image}
                            desc={item.description}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default HomePage