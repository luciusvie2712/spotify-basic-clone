import upload_song from "../assets/data/upload_song.png"
import upload_area from "../assets/data/upload_area.png"
import upload_added from "../assets/data/upload_added.png"
import { useState } from "react"
import axios from 'axios'
import { addSongAPI } from "../utils/api.customize"
import { toast } from "react-toastify"

const AddSong = () => {

    const [ image, setImage ] = useState(false)
    const [ audio, setAudio ] = useState(false)
    const [ name, setName ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ album, setAlbum ] = useState('none')
    const [ loading, setLoading ] = useState(false)
    const [ albumData, setAlbumData ] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await addSongAPI(name, description, image, audio, album)
            console.log(res.success)
            if (res.success) {
                toast.success("Song added")
                setName("")
                setDescription("")
                setImage(fasle)
                setAudio(false)
                setAlbum("none")
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
        <form onSubmit={handleSubmit} className="flex flex-col items-start gap-8 text-gray-700">
            <div className="flex gap-8">
                <div className="flex flex-col gap-4">
                    <p>Upload Song</p>
                    <input onChange={(e) => setAudio(e.target.files[0])} type="file" id='audio' accept="audio/*" hidden  />
                    <label htmlFor="audio">
                        <img src={audio ? upload_added : upload_song} className="w-24 cursor-pointer" />
                    </label>
                </div>
                <div className="flex flex-col gap-4">
                    <p>Upload Image</p>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' accept="image/*" hidden  />
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : upload_area    } className="w-24 cursor-pointer" />
                    </label>
                </div>
            </div>

            <div className="flex flex-col gap-2.5">
                <p>Song Name</p>
                <input onChange={(e) => setName(e.target.value)} value={name} className="bg-transparent outline-green-600 border-2 border-gray-500 p-2 w-[max(40vw,250px)]" placeholder="Enter song name here" type="text" required/>
            </div>

            <div className="flex flex-col gap-2.5">
                <p>Song Description</p>
                <input onChange={(e) => setDescription(e.target.value)} value={description} className="bg-transparent outline-green-600 border-2 border-gray-500 p-2 w-[max(40vw,250px)]" placeholder="Enter description song here" type="text" required/>
            </div>

            <div className="flex flex-col gap-2.5">
                <p>Album</p>
                <select onChange={(e) => setAlbum(e.target.value)} defaultValue={album} className="bg-transparent outline-green-600 border-2 border-gray-500 p-2 w-[max(10vw,150px)] cursor-pointer">
                    <option value="none">None</option>
                </select>
            </div>

            <button type="submit" className="text-base bg-black text-white py-2.5 px-10 cursor-pointer">
                ADD
            </button>
        </form>
    )
}

export default AddSong