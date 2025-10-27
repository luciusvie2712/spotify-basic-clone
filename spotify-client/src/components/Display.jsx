import { Route, Routes, useLocation, useParams } from "react-router-dom"
import HomePage from "../pages/HomePage"
import DisplayAlbum from "./DisplayAlbum"
import { useEffect, useRef, useState } from "react"
import { getListAlbumAPI } from "../utils/api.customize"

const Display = () => {
  const displayRef = useRef()
  const location = useLocation()
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(true)
  const [bgColor, setBgColor] = useState('#121212')

  const isAlbum = location.pathname.includes("album")

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await getListAlbumAPI()
        console.log(">>>", res)
        if (res?.success) {
          setAlbums(res?.data)
        } else {
          console.error("Failed to fetch albums")
        }
      } catch (error) {
        console.error("Error fetching albums:", error)
      } finally {
        setLoading(false)
      }
    };
    fetchAlbums()
  }, [])

  useEffect(() => {
    if (!displayRef.current) return
    displayRef.current.style.background = isAlbum
    ? `linear-gradient(${bgColor}, #121212)`
    : "#121212"
  }, [isAlbum, bgColor])

  if (loading) {
    return (
      <div className="text-white text-center mt-10">
        Loading albums...
      </div>
    )
  }

  return (
    <div
      ref={displayRef}
      className="w-[100%] bg-[#121212] rounded m-2 px-6 pt-4 overflow-auto lg:w-[75%] lg:ml-0 text-white"
    >
      <Routes>
        <Route path="/" element={<HomePage albums={albums} />} />
        <Route path="/album/:id" element={<DisplayAlbum setBgColor={setBgColor} />} />
      </Routes>
    </div>
  )
}

export default Display;
