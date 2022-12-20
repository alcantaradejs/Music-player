import { SkipBack, SkipForward } from "phosphor-react"

import { useMusicPlayer } from "../context"
import { PlayPause } from "./PlayPouse"
import { RepeatButton } from "./repeat"
import { Vol } from "./vol"

export function Controls() {
	const { nextMusic, previousMusic } = useMusicPlayer()

	return (
		<div className="mt-5 w-full flex flex-row justify-between items-center">
			<RepeatButton/>
			<div className="w-full flex justify-center items-center gap-2">
				<button onClick={previousMusic}>
					<SkipBack weight="fill" size={30}/>
				</button>
				<PlayPause/>
				<button onClick={nextMusic} >
					<SkipForward weight="fill" size={30}/>
				</button>
			</div>
			<Vol/>
		</div>
	)
}