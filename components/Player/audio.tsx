import { useEffect, useRef, useState } from "react"
import { useMusicPlayer } from "./context"

export function Audio() {
	const { currentMusic, getAudioData } = useMusicPlayer()
	const [audioURL, setAudioURL] = useState("")
	const audioRef = useRef()

	useEffect(() => {
		const audioData = getAudioData(currentMusic)
		setAudioURL(audioData.URL)
	}, [currentMusic])

	return (
		<>
			<audio src={audioURL} ref={audioRef}></audio>
		</>
	)
}