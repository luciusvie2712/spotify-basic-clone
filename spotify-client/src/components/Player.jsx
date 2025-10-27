import { useContext } from "react"
import { PlayerContext } from "../context/PlayerContext"

const Player = () => {
  const {
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    currentTrack,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext)

  const formatTime = (minute, second) => {
    if (isNaN(minute) || isNaN(second)) return "00:00"
    const mm = minute.toString().padStart(2, "0")
    const ss = second.toString().padStart(2, "0")
    return `${mm}:${ss}`
  }

  if (!currentTrack) {
    return (
      <div className="bg-black h-[10%] flex justify-center items-center text-gray-400">
        No track playing
      </div>
    )
  }

  return (
    <div className="bg-black h-[10%] flex justify-between items-center text-white px-4">
      {/* --- Left (Track Info) --- */}
      <div className="hidden items-center gap-4 lg:flex">
        <img
          src={currentTrack.image}
          alt={currentTrack.name || "track"}
          className="w-12 h-12 object-cover rounded"
        />
        <div>
          <p className="font-semibold">{currentTrack.name}</p>
          <p className="text-gray-400 text-sm">
            {currentTrack.desc?.slice(0, 18) || "Unknown Artist"}
          </p>
        </div>
      </div>

      {/* --- Middle (Controls) --- */}
      <div className="flex flex-col gap-1 m-auto items-center">
        {/* Control Buttons */}
        <div className="flex gap-4 items-center">
          <i className="fa-solid fa-shuffle cursor-pointer hover:text-green-500"></i>
          <i
            onClick={previous}
            className="fa-solid fa-backward cursor-pointer hover:text-green-500"
          ></i>

          {!playStatus ? (
            <i
              onClick={play}
              className="fa-solid fa-play cursor-pointer text-lg hover:text-green-500"
            ></i>
          ) : (
            <i
              onClick={pause}
              className="fa-solid fa-pause cursor-pointer text-lg hover:text-green-500"
            ></i>
          )}

          <i
            onClick={next}
            className="fa-solid fa-forward cursor-pointer hover:text-green-500"
          ></i>
          <i className="fa-solid fa-repeat cursor-pointer hover:text-green-500"></i>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-3 w-full">
          <p className="text-sm w-[40px] text-right">
            {formatTime(time.currentTime.minute, time.currentTime.second)}
          </p>

          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-[60vw] max-w-[500px] bg-gray-700 rounded-full cursor-pointer h-1 relative"
          >
            <div
              ref={seekBar}
              className="absolute top-0 left-0 h-1 bg-green-500 rounded-full transition-all duration-300"
              style={{ width: "0%" }}
            ></div>
          </div>

          <p className="text-sm w-[40px] text-left">
            {formatTime(time.totalTime.minute, time.totalTime.second)}
          </p>
        </div>
      </div>

      {/* --- Right (Extras) --- */}
      <div className="flex items-center gap-3 opacity-75">
        <i className="fa-solid fa-volume-high cursor-pointer"></i>
        <div className="h-1 w-[60px] bg-white/30 rounded"></div>
        <i className="fa-solid fa-expand cursor-pointer"></i>
      </div>
    </div>
  )
}

export default Player
