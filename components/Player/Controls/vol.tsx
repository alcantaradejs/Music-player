import { SpeakerHigh, SpeakerSlash } from "phosphor-react"
import { useRef } from "react"
import { useMusicPlayer } from "../context"

export function Vol() {
	const {muted, mute, unmute, setVolume} = useMusicPlayer()
	const inputRef = useRef()

	function muteToggle () {
		if (muted) unmute()
		else mute()
	}

	function handleChange() {
		const input = inputRef.current
		setVolume(input.value / 100)
	}

	return (
		<div className="flex flex-row gap-2 w-8 group">
			<button onClick={muteToggle}>
				{!muted ? <SpeakerHigh size={30} weight="fill"/> : <SpeakerSlash size={30} weight="fill"/>}
			</button>
			<input
                ref={inputRef}
				className="w-2 opacity-0 transition-all group-hover:w-16 group-hover:opacity-100"
				type="range" 
				min={0} max={100}
                onChange={handleChange}
			/>
		</div>
	)
}