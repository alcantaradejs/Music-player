import { SkipBack, SkipForward } from "phosphor-react"
import { useMusicPlayer } from "../context"
import { PlayPause } from "./PlayPouse"

export function Controls() {
	const { nextMusic, previousMusic } = useMusicPlayer()

	return (
		<div className="w-full flex justify-center mt-5 gap-2">
			<button onClick={previousMusic}>
				<SkipBack weight="fill" size={30}/>
			</button>
			<PlayPause/>
			<button onClick={nextMusic} >
				<SkipForward weight="fill" size={30}/>
			</button>
		</div>
	)
}