import { Pause } from "phosphor-react"
import { useEffect, useRef, useState } from "react"
import { useMusicPlayer } from "./context"

export function Audio() {
	const { currentMusic, getAudioData, isPlaying, audioEnded, play, pause, setDuration, setCurrentTime } = useMusicPlayer()
	const [audioURL, setAudioURL] = useState("")
	const audioRef = useRef()

	useEffect(() => {
		const audioData = getAudioData(currentMusic)
		setAudioURL(audioData.URL)
	}, [currentMusic])

	useEffect(() => {
		const audio = audioRef.current
		if (isPlaying) audio.play()
		else audio.pause()
	}, [isPlaying])

	function onDurationChange() {
		setDuration(audioRef.current.duration)
	}

	return (
		<>
			<audio 
				controls autoPlay 
				src={audioURL} 
				ref={audioRef}
				onDurationChange={onDurationChange}
				onPlay={play}
				onPause={pause}
				onEnded={audioEnded}
			></audio>
		</>
	)
}