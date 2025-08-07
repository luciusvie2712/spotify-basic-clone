import React, { useContext } from "react"
import SideBar from "./components/SideBar"
import Player from "./components/Player"
import Display from "./components/Display"
import { PlayerContext } from './context/PlayerContext'

const App = () => {

  const { audioRef, track } = useContext(PlayerContext)

  return (
    <div className="bg-black h-screen">
      <div className="h-[90%] flex">
        <SideBar />
        <Display />
      </div>
      <Player />
      <audio preload="auto" ref={audioRef} src={track.file}></audio>
    </div>
  )
}

export default App
