import smallLogo from "../assets/data/spotify_logo.png"
import bigLogo from "../assets/data/big_logo.png"
import { Link, NavLink } from "react-router-dom"

const SideBar = () => {
    return (
        <div className="bg-[#003A10] min-h-screen pl-[4vw]">
            <img src={smallLogo} className="block sm:hidden mr-5 mt-5 w-[max(5vw,40px)]" />
            <img src={bigLogo} className="hidden sm:block w-[max(10vw,100px)] mt-5 pr-[15px]" />

            <div className="flex flex-col gap-5 mt-10">
                <NavLink to='/add-song' className="flex items-center gap-3 bg-white text-black font-medium border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm cursor-pointer">
                    <i className="fa-solid fa-music w-5"></i>
                    <p className="hidden sm:block">Add Song</p>
                </NavLink>
                <NavLink to='/list-song' className="flex items-center gap-3 bg-white text-black font-medium border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm cursor-pointer">
                    <i className="fa-solid fa-headphones w-5"></i>
                    <p className="hidden sm:block">List Song</p>
                </NavLink>
                <NavLink to='/add-album' className="flex items-center gap-3 bg-white text-black font-medium border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm cursor-pointer">
                    <i className="fa-solid fa-folder w-5"></i>
                    <p className="hidden sm:block">Add Album</p>
                </NavLink>
                <NavLink to='/list-album' className="flex items-center gap-3 bg-white text-black font-medium border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm cursor-pointer">
                    <i className="fa-solid fa-list w-5"></i>
                    <p className="hidden sm:block">List Album</p>
                </NavLink>
            </div>
        </div>
    )
}

export default SideBar