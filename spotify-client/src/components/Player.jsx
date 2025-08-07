import { useContext } from "react"
import { songsData } from "../assets/assets"
import { PlayerContext } from "../context/PlayerContext"

const Player = () => {

    const { seekBar, seekBg, playStatus, play, pause, track, time, previous, next, seekSong } = useContext(PlayerContext)

    return (
        <div className="bg-black h-[10%] flex justify-between items-center text-white px-4">
            <div className="hidden item-center gap-4 lg:flex">
                <img src={track.image} className="w-12" />
                <div className="">
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0,12)}</p>
                </div>
            </div>
            <div className="flex flex-col gap-1 m-auto items-center">
                <div className="flex gap-4">
                    <i className="fa-solid fa-shuffle w-4 cursor-pointer"></i>
                    <i onClick={previous} className="fa-solid fa-backward w-4 cursor-pointer"></i>
                    {!playStatus ? 
                        <i onClick={play} className="fa-solid fa-play w-4 cursor-pointer"></i>
                        :
                        <i onClick={pause} className="fa-solid fa-pause w-4 cursor-pointer"></i>
                    }
                    
                    
                    <i onClick={next} className="fa-solid fa-forward w-4 cursor-pointer"></i>
                    <i className="fa-solid fa-repeat w-4 cursor-pointer"></i>
                </div>
                <div className="flex item-center gap-5">
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div ref={seekBg} onClick={seekSong} className="w-[60vw] max-w-[500px] bg-gray-200 rounded-full cursor-pointer h-0.5 mt-3">
                        <hr ref={seekBar} className="w-0 border-none bg-green-600 h-1 rounded-full"/>
                    </div>
                    <p>{time.totalTime.minute}:{time.totalTime.second}</p>
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