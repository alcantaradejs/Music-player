import { useState } from "react"
import { Play, Pause } from "phosphor-react"
import { useMusicPlayer } from "../context"

type playPauseType = {
	autoPlay: boolean
}

export function PlayPause({autoPlay}: playPauseType) {
	const {isPlaying, play, pause} = useMusicPlayer()

	if ( isPlaying ) {
		return (
			<button className="
			w-[50px] h-[50px] rounded-full
			bg-red text-white
			flex justify-center items-center
			"
			onClick={pause}
			>
				<Pause size={30} weight="fill"/>
			</button>
		)
	}

	return (
		<button className="
		w-[50px] h-[50px] rounded-full
		bg-red text-white
		flex justify-center items-center
		"
		onClick={play}
		>
			<Play size={30} weight="fill"/>
		</button>
	)
}