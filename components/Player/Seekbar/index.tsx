import { useRef } from "react"
import { TimeFormatter } from "../../../utils/timeFormatter"
import { useMusicPlayer } from "../context"

export function Seekbar() {
	const {duration, currentTime, setUpdateTime} = useMusicPlayer()
	const inputRef = useRef()

	function handleChange() {
		setUpdateTime(inputRef.current.value)
	}

	return (
		<div className="mt-5">
			<div className="w-full flex flex-row justify-between">
				<span className="text-sm">{TimeFormatter(currentTime)}</span>
				<span className="text-sm">{TimeFormatter(duration)}</span>
			</div>
			<input
				className="w-full"
				ref={inputRef}
				type="range" 
				min={0} max={duration} 
				value={currentTime} 
				onChange={handleChange}
			/>
		</div>
	)
}