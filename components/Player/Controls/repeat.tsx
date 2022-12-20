import { Repeat, RepeatOnce } from "phosphor-react"
import { useMusicPlayer } from "../context"

export function RepeatButton() {
	const { repeat, setRepeat } = useMusicPlayer()

	if (repeat) {
		return (
			<button onClick={e => setRepeat(false)}>
				<RepeatOnce size={30}/>
			</button>
		)
	}

	return (
		<button onClick={e => setRepeat(true)}>
			<Repeat size={30}/>
		</button>
	)
}