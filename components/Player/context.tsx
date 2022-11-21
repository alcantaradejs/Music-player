import { createContext, useContext, ReactNode, useState} from "react"
import { MusicList } from "../../model/musics"

const PlayerContext = createContext({})

type providerPropsType = {
	children : ReactNode
}

export function Provider({ children }:providerPropsType) {
	const [currentMusic, setCurrentMusic] = useState(0)

	function nextMusic() {
		if (currentMusic < MusicList.length) setCurrentMusic( currentMusic + 1 )
	}

	function previousMusic() {
		if ( currentMusic > 0) setCurrentMusic( currentMusic - 1 )
	}

	function getAudioData(position: number) {
		return MusicList[position]
	}

	return (
		<PlayerContext.Provider value={{ currentMusic, nextMusic, previousMusic, getAudioData }}>
			{ children }
		</PlayerContext.Provider>
	)
}

export function useMusicPlayer() {
	return useContext(PlayerContext)
}
