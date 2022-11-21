import { useState } from "react"
import { Play, Pause } from "phosphor-react"

type playPauseType = {
	autoPlay: boolean
}

export function PlayPause({autoPlay}: playPauseType) {
	const [ isPlaying, setIsPlaying ] = useState(autoPlay ?? false)

	if ( isPlaying ) {
		return (
			<button className="
			w-[50px] h-[50px] rounded-full
			bg-red text-white
			flex justify-center items-center
			">
				<Pause size={30} weight="fill"/>
			</button>
		)
	}

	return (
		<button className="
		w-[50px] h-[50px] rounded-full
		bg-red text-white
		flex justify-center items-center
		">
			<Play size={30} weight="fill"/>
		</button>
	)
}