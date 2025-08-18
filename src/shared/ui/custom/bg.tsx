import Image from 'next/image'

export function Bg() {
	return (
		<>
			<Image
				className={`absolute top-0 right-0 opacity-50 -z-[1]`}
				src={'/gradient.png'}
				alt='gradient'
				width={524}
				height={520}
				priority
			/>
			<div
				className={`h-0 w-120 absolute  top-1/5 right-0 shadow-[0_0_700px_15px_rgba(255,255,255,1)] -rotate-30 -z-[1]`}></div>
		</>
	)
}
