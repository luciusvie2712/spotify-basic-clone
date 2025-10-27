import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { deleteAlbumAPI, getListAlbumAPI } from "../utils/albumApi.customize"

const ListAlbum = () => {
    const [ data, setData ] = useState([])

    const fetchListAlbum = async () => {
        try {
            const dataAlbums = await getListAlbumAPI()
            if (dataAlbums?.success) {
                setData(dataAlbums?.data)
            }
        } catch (error) {
            toast.error("Error Occured")
        }
    }

    useEffect(() => {
        fetchListAlbum()
    }, [])
    console.log(data)

    const removeAlbum = async (id) => {
        try {
            const remove = await deleteAlbumAPI(id)
            if (remove.success) {
                toast.success("Delete Song")
                fetchListAlbum()
            }
        } catch (error) {
            toast.error("Error Occured")
        }
    }

    return (
        <div className="">
            <p>All List Song</p>
            <br />
            <div>
                <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Description</b>
                    <b>Action</b>
                </div>
                {data.map((item, index) => {
                    return (
                        <div key={index} className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_0.5fr] items-center gap-2.5 p-3 border border-gray-400 text-sm mr-5">
                            <img src={item.image} className="w-12" />
                            <p>{item.name}</p> 
                            <p>{item.description}</p>
                            <p onClick={() => removeAlbum(item._id)} className="cursor-pointer">X</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListAlbum