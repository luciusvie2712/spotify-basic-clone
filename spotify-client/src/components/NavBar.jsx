

const NavBar = () => {
    return (
        <>
            <div className="w-full flex justify-between items-center ">
                <div className="flex item-center gap-4">
                    <i className="fa-solid fa-angle-left bg-black p-3 rounded-full px-4  pr-6 cursor-pointer"></i>
                    <i className="fa-solid fa-angle-right bg-black p-3 rounded-full px-4  pr-6 cursor-pointer"></i>
                </div>
                <div className="flex gap-5 items-center">
                    <p className="bg-white text-black font-semibold p-2 rounded-3xl px-5 cursor-pointer hover:bg-[#eee9e9]">Explore Primeum</p>
                    <div className="text-[#eee9e9] cursor-pointer hover:text-white flex items-center gap-1">
                        <i className="fa-solid fa-download"></i>
                        Download App
                    </div>
                    <p className="bg-[#9691eb] text-black font-bold text-[25px] outline-solid outline-[#493e3e] outline-offset-2 rounded-full px-2.5 before:content-['V']"></p>
                </div>
            </div>
            <div className="flex gap-5 mt-3 item-center">
                <p className="bg-white text-black py-1 px-4 rounded-2xl cursor-pointer hover:bg-[#dad7d7]">All</p>
                <p className="bg-black text-white py-1 px-4 rounded-2xl cursor-pointer hover:bg-[#fff] hover:text-black">Music</p>
                <p className="bg-black text-white py-1 px-4 rounded-2xl cursor-pointer hover:bg-[#fff] hover:text-black">Podcasts</p>
            </div>
        </>
    )
}

export default NavBar