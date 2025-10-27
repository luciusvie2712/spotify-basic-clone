import { useEffect, useState } from "react"
import { deleteSongAPI, getListSongAPI } from "../utils/songApi.customize"
import { toast } from "react-toastify"

const ListSong = () => {
    const [data, setData] = useState([])
    const fetchListSong = async () => {
        try {
            const dataSongs = await getListSongAPI()
            console.log(dataSongs)
            if (dataSongs.success) {
                setData(dataSongs.data)
            }
        } catch (error) {
            toast.error("Error Occured")
        }
    }
    const removeSong = async (id) => {
        try {
            const remove = await deleteSongAPI(id)
            if (remove.success) {
                toast.success("Deleted Song")
                fetchListSong()
            }
        } catch (error) {
            toast.error("Error Occured")
        }
    }

    useEffect(() => {
        fetchListSong()
    }, [])
    return (
        <div className="">
            <p>All List Song</p>
            <br />
            <div>
                <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Album</b>
                    <b>Description</b>
                    <b>Action</b>
                </div>
                {data.map((item, index) => {
                    return (
                        <div key={index} className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-400 text-sm mr-5">
                            <img src={item.image} className="w-12" />
                            <p>{item.name}</p>
                            <p>{item?.album?.name}</p> 
                            <p>{item.duration}</p>
                            <p onClick={() => removeSong(item._id)} className="cursor-pointer">X</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListSong