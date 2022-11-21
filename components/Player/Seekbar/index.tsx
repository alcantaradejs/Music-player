export function Seekbar() {
	return (
		<div className="mt-5">
			<div className="w-full flex flex-row justify-between">
				<span className="text-sm">00:00</span>
				<span className="text-sm">00:00</span>
			</div>
			<input type="range" min={0} className="w-full"/>
		</div>
	)
}