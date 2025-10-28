import { createContext, useEffect, useRef, useState } from "react";
import { getListSongAPI } from "../utils/api.customize";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  /* ---------- STATE ---------- */
  const [songs, setSongs] = useState([]);
  const [trackIndex, setTrackIndex] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  });

  /* ---------- LAY DANH SACH BAI HAT KHI APP KHOI DONG ---------- */
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await getListSongAPI();
        if (res?.success) {
          setSongs(res?.data || []);
        } else {
          console.error("Failed to fetch songs");
        }
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };
    fetchSongs();
  }, []);

  /* ---------- PLAY / PAUSE ---------- */
  const play = () => {
    audioRef.current?.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current?.pause();
    setPlayStatus(false);
  };

  /* ---------- PLAY THEO INDEX (cap nha src truoc) ---------- */
  const playWithId = async (index) => {
    if (index < 0 || index >= songs.length) return;
    await setTrackIndex(index);

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
        setPlayStatus(true);
      }
    }, 50);
  };

  const previous = () => trackIndex > 0 && playWithId(trackIndex - 1);
  const next = () => trackIndex < songs.length - 1 && playWithId(trackIndex + 1);

  /* ---------- SEEK ---------- */
  const seekSong = (e) => {
    if (!audioRef.current || !seekBg.current) return;
    const progress =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
    audioRef.current.currentTime = progress;
  };

  /* ---------- CAP NHAT SEEK BAR & TIME ---------- */
  useEffect(() => {
    if (!audioRef.current) return;

    const update = () => {
      const cur = audioRef.current.currentTime;
      const tot = audioRef.current.duration || 0;

      seekBar.current.style.width = tot ? `${(cur / tot) * 100}%` : "0%";

      setTime({
        currentTime: {
          minute: Math.floor(cur / 60),
          second: Math.floor(cur % 60),
        },
        totalTime: {
          minute: Math.floor(tot / 60),
          second: Math.floor(tot % 60),
        },
      });
    };

    const id = setInterval(update, 500);
    return () => clearInterval(id);
  }, [trackIndex, songs]);

  useEffect(() => {
    if (!audioRef.current || songs.length === 0) return;

    const newSrc = songs[trackIndex]?.file;
    if (newSrc && audioRef.current.src !== newSrc) {
      audioRef.current.src = newSrc;
      if (playStatus) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [trackIndex, songs, playStatus]);

  const currentTrack = songs[trackIndex];

  /* ---------- CONTEXT VALUE ---------- */
  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    songs,
    setSongs,
    currentTrack,
    trackIndex,
    setTrackIndex,
    playStatus,
    setPlayStatus,
    time,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
      {currentTrack && (
        <audio
          ref={audioRef}
          onEnded={next} // <- tu dong chuyen bai khi ket thuc
        />
      )}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;