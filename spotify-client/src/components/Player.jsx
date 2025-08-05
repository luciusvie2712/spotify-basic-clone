import { songsData } from "../assets/assets"

const Player = () => {
    return (
        <div className="bg-black h-[10%] flex justify-between items-center text-white px-4">
            <div className="hidden item-center gap-4 lg:flex">
                <img src={songsData[0].image} className="w-12" />
                <div className="">
                    <p>{songsData[0].name}</p>
                    <p>{songsData[0].desc.slice(0,12)}</p>
                </div>
            </div>
            <div className="flex flex-col gap-1 m-auto items-center">
                <div className="flex gap-4">
                    <i className="fa-solid fa-shuffle w-4 cursor-pointer"></i>
                    <i className="fa-solid fa-backward w-4 cursor-pointer"></i>
                    <i className="fa-solid fa-play w-4 cursor-pointer"></i>
                    <i className="fa-solid fa-forward w-4 cursor-pointer"></i>
                    <i className="fa-solid fa-repeat w-4 cursor-pointer"></i>
                </div>
                <div className="flex item-center gap-5">
                    <p>1:00</p>
                    <div className="w-[60vw] max-w-[500px] bg-gray-200 rounded-full cursor-pointer h-0.5 mt-3">
                        <hr className="w-[33.33%] border-none bg-green-600 h-1 rounded-full"/>
                    </div>
                    <p>3:00</p>
                </div>
            </div>

            <div className="flex items-center gap-2 opacity-75">
                <i className="fa-regular fa-square-caret-left cursor-pointer"></i>
                <i className="fa-solid fa-microphone cursor-pointer"></i>
                <i className="fa-solid fa-bars-staggered cursor-pointer"></i>
                <i className="fa-solid fa-computer cursor-pointer"></i>
                <i className="fa-solid fa-volume-high cursor-pointer"></i>
                <div className="h-1 w-[50px] bg-white rounded"></div>
                <i className="fa-solid fa-chalkboard cursor-pointer"></i>
                <i className="fa-solid fa-expand cursor-pointer"></i>
            </div>
        </div>
    )
}

export default Player