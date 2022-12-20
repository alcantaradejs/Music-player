export type MusicType = {
	title: string
	artist: string
	coverURL: string
	URL: string
	credits?: string
}

export const MusicList : MusicType[] = [
	{
		title: "Alone",
		artist: "Heleen, BEAUZ",
		coverURL: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/266/850x850/alone-1670547652-ZJptqa923O.jpg",
		URL: "/Alone-NCS-Release.mp3",
		credits: " Song: Main Reaktor - Alone [NCS Release] Music provided by NoCopyrightSounds Free Download/Stream: http://ncs.io/alone Watch: http://youtu.be/3EJAc9SZwgc  ",
	},
	{
		title: "Mess",
		artist: "SIIK, Alenn",
		coverURL: "https://linkstorage.linkfire.com/medialinks/images/bdf69836-0e92-4048-b17b-79bf4b6cac36/artwork-440x440.jpg",
		URL: "/Mess-NCS-Release.mp3",
		credits: "Song: SIIK & Alenn - Mess [NCS Release] Music provided by NoCopyrightSounds Free Download/Stream: http://ncs.io/Mess Watch: http://youtu.be/",
	}
]