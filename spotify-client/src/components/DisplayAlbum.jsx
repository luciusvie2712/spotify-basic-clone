import NavBar from "./NavBar"
import { useParams } from "react-router-dom"
import { albumsData, songsData } from "../assets/assets"
import logoSpotify from "../assets/data/spotify_logo.png"

const DisplayAlbum =  () => {
const {id} = useParams()
const data = albumsData[id]
console.log(data)


    return (
        <>
            <NavBar />
            <div className="flex mt-10 gap-8 flex-col md:flex-row md:items-end">
                <img className="w-48 rounded" src={data.image} />
                <div className="flex flex-col">
                    <p>Playlist</p>
                    <h2 className="text-5xl font-bold md:text-7xl mb-4">{data.name}</h2>
                    <h4 className="">{data.desc}</h4>
                    <div className="mt-1 flex items-center gap-1">
                        <img className="inline-block w-4" src={logoSpotify} />
                        Spotify - 1,000,000 likes - <b>2 songs</b>, <b>about 15 min </b>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-gray-300">
                <p><b className="mr-4">#</b>Title</p>
                <p>Album</p>
                <p className="hidden sm:block">Date Added</p>
                <i className="fa-regular fa-alarm-clock m-auto w-4"></i>
            </div>
            <hr />
            <div>
                {songsData.map((item, index) => (
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center cursor-pointer hover:bg-[#5c555561] text-[#ccc]">
                        <p className="text-white">
                            <b className="mr-4 text-[#a7a7a7]">{index+1}</b>
                            <img src={item.image} className="inline w-10 mr-5"/>
                            {item.name}
                        </p>
                        <p className="text-[15px]">{data.name}</p>
                        <p className="text-[15px] hidden sm:block">5 days ago</p>
                        <p className="text-[15px] text-center">{item.duration}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default DisplayAlbum