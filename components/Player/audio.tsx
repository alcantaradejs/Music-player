import { Pause } from "phosphor-react"
import { useEffect, useRef, useState } from "react"
import { useMusicPlayer } from "./context"

export function Audio() {
	const { currentMusic, getAudioData, isPlaying, audioEnded, play, pause, setDuration, setCurrentTime, updateTime, muted, volume } = useMusicPlayer()
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

	useEffect(() => {
		audioRef.current.currentTime = updateTime
	}, [updateTime])

	useEffect(() => {
		const audio = audioRef.current
		if (muted) audio.volume = 0
		else audio.volume = volume
	}, [muted])

	useEffect(() => {
		const audio = audioRef.current
		if (!muted) audio.volume = volume
	},[volume])

	function onDurationChange() {
		setDuration(audioRef.current.duration)
	}

	function onTimeUpdate() {
		setCurrentTime(audioRef.current.currentTime)
	}

	return (
		<>
			<audio 
				autoPlay
				src={audioURL} 
				ref={audioRef}
				onTimeUpdate={onTimeUpdate}
				onDurationChange={onDurationChange}
				onPlay={play}
				onPause={pause}
				onEnded={audioEnded}
			></audio>
		</>
	)
}