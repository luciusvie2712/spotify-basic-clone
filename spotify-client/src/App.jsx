import SideBar from "./components/SideBar"
import Player from "./components/Player"
import Display from "./components/Display"
import { PlayerContext } from './context/PlayerContext'

const App = () => {


  return (
    <div className="bg-black h-screen">
      <div className="h-[90%] flex">
        <SideBar />
        <Display />
      </div>
      <Player />
    </div>
  )
}

export default App
