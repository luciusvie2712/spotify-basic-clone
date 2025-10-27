import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";
import { getListSongAPI } from "../utils/api.customize";

export const PlayerContext = createContext()

const PlayerContextProvider = (props) => {
    const audioRef = useRef()
    const seekBg = useRef()
    const seekBar = useRef()

    const [ songs, setSongs ] = useState([])
    const [ trackIndex, setTrackIndex ] = useState(0)
    const [ playStatus, setPlayStatus ] = useState(false)
    const [ time, setTime ] = useState({
        currentTime: {
            second: 0,
            minute: 0
        }, 
        totalTime: {
            second: 0,
            minute: 0
        }
    })

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const res = await getListSongAPI()
                if (res?.success) {
                    setSongs(res?.data || [])
                } else {
                    console.error("Failed to fetch songs")
                }
            } catch (error) {
                console.error("Error fetching songs: ", error)
            }
        }
        fetchSongs()
    })

    const play = () => {
        audioRef.current.play()
        setPlayStatus(true)
    }

    const pause = () => {
        audioRef.current.pause()
        setPlayStatus(false)
    }

    const playWithId = async (index) => {
        if (index < 0 || index >= songs.length) return
        await setTrackIndex(index)
        setTimeout(() => {
            audioRef.current.play()
            setPlayStatus(true)
        }, 100)
    }

    const previous = async () => {
        if (trackIndex > 0) playWithId(trackIndex - 1)
    }
    const next = async () => {
        if (trackIndex < songs.length - 1) playWithId(trackIndex + 1)
    }

    const seekSong = async (e) => {
        if (!audioRef.current || !seekBg.current) return
        const progress =
        (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
        audioRef.current.duration
        audioRef.current.currentTime = progress
    }

    useEffect(() => {
        if (!audioRef.current) return

        const updateTime = () => {
            if (!audioRef.current.duration) return
            const current = audioRef.current.currentTime
            const total = audioRef.current.duration
            seekBar.current.style.width = `${(current / total) * 100}%`
            setTime({
                currentTime: {
                minute: Math.floor(current / 60),
                second: Math.floor(current % 60)
                },
                totalTime: {
                minute: Math.floor(total / 60),
                second: Math.floor(total % 60)
                }
            })
        }

        const interval = setInterval(updateTime, 500)
        return () => clearInterval(interval)
    }, [trackIndex])

    const currentTrack = songs[trackIndex]

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        songs,
        currentTrack,
        trackIndex,
        setTrackIndex,
        playStatus,
        time,
        play,
        pause,
        playWithId,
        previous,
        next,
        seekSong
    }
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
            {currentTrack && (
                <audio
                ref={audioRef}
                src={currentTrack.file}
                onEnded={next}
                />
            )}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider