import { useState } from "react"
import imgUpload from "../assets/data/upload_area.png"
import { addAlbumAPI } from "../utils/albumApi.customize"
import { toast } from "react-toastify"


const AddAlbum = () => {
    const [ imageAlbum, setImageAlbum ] = useState(false)
    const [ name, setName ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ bgColor, setBgColor ] = useState("#ffffff")
    const [ loading, setLoading ] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const resData = await addAlbumAPI(name, description, bgColor, imageAlbum)
            console.log(resData)
            if (resData?.success) {
                toast.success("Album added")
                setImageAlbum(false)
                setName("")
                setDescription("")
                setBgColor("")
            } else {
                toast.error("Something went wrong")
            }
        } catch (error) {
            toast.error("Error")
        }
        setLoading(false)
    }

    return loading ? (
        <div className="grid place-items-center min-h-[80vh]">
            <div className="w-16 h-16 place-seft-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin"></div>
        </div>
    ) : (
        <form onSubmit={handleSubmit} className="flex flex-col items-start text-gray-700 gap-8">
            <div className="flex flex-col gap-4">
                <p>Upload Image</p>
                <input onChange={(e) => setImageAlbum(e.target.files[0])} type="file" name="image" id="image" hidden/>
                <label htmlFor="image">
                    <img src={imageAlbum ? URL.createObjectURL(imageAlbum) : imgUpload} className="w-24 cursor-pointer" />
                </label>
            </div>

            <div className="flex flex-col gap-2">
                <p>Album Name</p>
                <input onChange={(e) => setName(e.target.value)} value={name} className="bg-transparent outline-green-600 border-2 border-gray-500 p-2 w-[max(40vw,250px)]" type="text" placeholder="Type here" required />
            </div>

            <div className="flex flex-col gap-2">
                <p>Album Description</p>
                <input onChange={(e) => setDescription(e.target.value)} value={description} className="bg-transparent outline-green-600 border-2 border-gray-500 p-2 w-[max(40vw,250px)]" type="text" placeholder="Type here" required />
            </div>

            <div className="flex flex-col gap-2">
                <p>Bakground Color</p>
                <input onChange={(e) => setBgColor(e.target.value)} value={bgColor} type="color" className="w-14" />
            </div>

            <button className="bg-black text-white px-6 py-2 cursor-pointer hover:opacity-85" type="submit">
                ADD
            </button>
        </form>
    )
}

export default AddAlbum