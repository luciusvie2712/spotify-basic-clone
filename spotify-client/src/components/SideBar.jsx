import React from "react";

const SideBar = () => {
    return (
        <div className="w-[25%] h-full flex-col gap-2 text-white lg:flex p-2 hidden">
            <div className="bg-[#121212] h-[15%] justify-around flex flex-col rounded ">
                <div className="flex items-center gap-3 pl-8 cursor-pointer">
                    <i className="fa-regular fa-house text-[18px]"></i>
                    <p className="font-bold">Home</p>
                </div>
                <div className="flex items-center gap-3 pl-8 cursor-pointer">
                    <i class="fa-solid fa-magnifying-glass text-[18px]"></i>
                    <p className="font-bold">Search</p>
                </div>
            </div>

            <div className="bg-[#121212] h-[85%] rounded">
                <div className="flex p-4 item-center justify-between">
                    <div className="flex gap-2 items-center">
                        <i className="fa-solid fa-barcode text-[18px]"></i>
                        <p>Your Library</p>
                    </div>
                    <div className="flex item-center gap-3 ">
                        <i class="fa-solid fa-arrow-right text-[18px]"></i>
                        <i class="fa-solid fa-plus text-[18px]"></i>
                    </div>
                </div>
                
                <div className="bg-[#242424] flex flex-col items-start m-2 pl-4 gap-1 rounded justify-start p-4 font-semibold">
                    <h1>Create your playlist</h1>
                    <p className="font-light">it's easy we will help you</p>
                    <button className="bg-white text-black p-1 rounded-full py-1.5 px-4 mt-1.5 text-[15px] cursor-pointer hover:translate-y-0.5  hover:inset-shadow-sm hover:inset-shadow-[#ccc]">Create Playlist</button>
                </div>
                <div className="bg-[#242424] flex flex-col items-start m-2 pl-4 gap-1 rounded justify-start p-4 font-semibold">
                    <h1>Let's find some podcasts to follow</h1>
                    <p className="font-light">we'll keep you update on new episodes</p>
                    <button className="bg-white text-black p-1 rounded-full py-1.5 px-4 mt-1.5 text-[15px] cursor-pointer hover:translate-y-0.5  hover:inset-shadow-sm hover:inset-shadow-[#ccc]">Browser Podcasts</button>
                </div>
            </div>
        </div>
    )
}

export default SideBar