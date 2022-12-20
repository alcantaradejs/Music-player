import { ESLint } from "eslint"
import { createContext, useContext, ReactNode, useState} from "react"
import { MusicList } from "../../model/musics"

const PlayerContext = createContext({})

type providerPropsType = {
	children : ReactNode
}

export function Provider({ children }:providerPropsType) {
	const [currentMusic, setCurrentMusic] = useState(0)
	const [isPlaying, setIsPlayng] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [updateTime, setUpdateTime] = useState(0)
	const [ duration, setDuration ] = useState(0)

	function nextMusic() {
		if (currentMusic <= MusicList.length - 2) setCurrentMusic( currentMusic + 1 )
	}

	function previousMusic() {
		if ( currentMusic > 0) setCurrentMusic( currentMusic - 1 )
	}

	function getAudioData(position: number) {
		return MusicList[position]
	}
	
	function audioEnded() {
		nextMusic()
	}

	function play() {
		setIsPlayng(true)
	}

	function pause() {
		setIsPlayng(false)
	}

	return (
		<PlayerContext.Provider 
			value={{ 
				getAudioData, 
				currentMusic, nextMusic, previousMusic,
				isPlaying, audioEnded, play, pause,
				duration, setDuration, currentTime, setCurrentTime,
				updateTime, setUpdateTime,
			}}
		>
			{ children }
		</PlayerContext.Provider>
	)
}

export function useMusicPlayer() {
	return useContext(PlayerContext)
}
