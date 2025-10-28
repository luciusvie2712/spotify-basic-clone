import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import logoSpotify from "../assets/data/spotify_logo.png";
import { useContext, useEffect, useState, useMemo } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { getAlbumByIdAPI, getListSongAPI } from "../utils/api.customize";

const DisplayAlbum = ({ setBgColor }) => {
  const { id } = useParams();
  const { playWithId, setSongs } = useContext(PlayerContext);
  const [ album, setAlbum ] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const res = await getAlbumByIdAPI(id)
        console.log(">>>>", res)
        if (res?.success) {
          setAlbum(res?.data)
          if (res?.data?.bgColor) setBgColor(res?.data?.bgColor)
        } else {
          console.warn("Failed to fetch album by id")
        }
      } catch (error) {
        console.error("Error fetching album: ", error)
      } finally {
        setLoading(false)
      }
    }
    fetchAlbum()
  }, [id, setBgColor])

  if (loading) {
    return (
      <div className="text-center text-gray-400 mt-10">Loading album...</div>
    );
  }

  if (!album) {
    return <div className="text-gray-400 mt-10">Album not found.</div>
  }

  return (
    <>
      <NavBar />
      <div className="flex mt-10 gap-8 flex-col md:flex-row md:items-end">
        <img
          className="w-48 rounded shadow-lg"
          src={album.image}
          alt={album.name}
        />
        <div className="flex flex-col">
          <p className="uppercase text-sm tracking-wider text-gray-400">
            Playlist
          </p>
          <h2 className="text-5xl font-bold md:text-7xl mb-4">{album.name}</h2>
          <h4 className="text-gray-300">{album.description}</h4>
          <div className="mt-1 flex items-center gap-2 text-gray-400 text-sm">
            <img className="inline-block w-4" src={logoSpotify} alt="Spotify" />
            <span>Spotify • 1,000,000 likes •</span>
            <b>{album?.songs.length} songs</b>
          </div>
        </div>
      </div>
      {/* ------------------     SHOW PLAYLIST      --------------------- */}
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-gray-300 text-sm border-b border-gray-700 pb-2">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <i className="fa-regular fa-clock m-auto w-4"></i>
      </div>

      <div>
        {album?.songs.map((item, index) => (
          <div
            key={item._id}
            onClick={() => {
              setSongs(album?.songs) // <- cap nhat playlist hien tai trong album
              playWithId(index) // <- phat bai o vi tri index trong album
            }}
            className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center cursor-pointer hover:bg-[#5c555561] text-[#ccc] rounded-md transition-all"
          >
            <p className="text-white flex items-center overflow-hidden">
              <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
              <img
                src={item.image}
                className="inline w-10 mr-5 rounded"
                alt={item.name}
              />
              <span className="truncate">{item.name}</span>
            </p>
            <p className="text-[15px] truncate">{album.name}</p>
            <p className="text-[15px] hidden sm:block text-gray-400">
              5 days ago
            </p>
            <p className="text-[15px] text-center">{item.duration}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayAlbum;
