import { Provider, useMusicPlayer } from "./context"
import { useState } from "react"

import { Audio } from "./audio"
import { Seekbar } from "./Seekbar"
import {Controls} from "./Controls"

function Player() {
	const {currentMusic, getAudioData} = useMusicPlayer() 
	const [ cover, setCover ] = useState("#")
	const [ musicTitle, setMusicTitle ] = useState("...")
	const [ artist, setArtist ] = useState("...")

	useState(() => {
		const {title, artist, coverURL} = getAudioData(currentMusic)
		setCover(coverURL)
		setMusicTitle(title)
		setArtist(artist)
	}, [currentMusic])

	return (
		<div className="max-w-[456px] mx-10 box-border text-text">
			<Audio/>
			<img 
				src={cover} 
				alt="capa da musica" 
				className="
				h-[350px] rounded-xl 
				shadow-lg shadow-[#20202030]
			"/>
			<h2 className="font-bold text-2xl mt-5">{musicTitle}</h2>
			<h3 className="text-[#555] text-sm" >{artist}</h3>
			<Seekbar/>
			<Controls/>
		</div>
	)
}

export function MusicPlayer() {
	return (
		<Provider>
			<Player/>
		</Provider>
	)
}