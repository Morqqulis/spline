import Link from 'next/link'
import Spline from '@splinetool/react-spline/next'

export function Hero() {
	return (
		<div className={`py-28 relative min-h-[calc(100vh-6rem)] overflow-x-clip`}>
			<div className='flex max-[1390px]:flex-col-reverse max-[1390px]:items-center mx-auto px-5 md:px-20 w-full'>
				<div className={`max-w-2xl z-20 ml-[5%] md:ml-[10%] mt-[10%] lg:mt-[5%] self-start relative`}>
					<div className={`flex flex-col gap-12`}>
						<div
							className={`relative w-xs h-10  cursor-pointer rounded-custom bg-size-[200%] shadow-[0_0_15px_rgba(255,255,255,0.3)]`}
							style={{
								background:
									'linear-gradient(to right, #656565, #7f42a7, #6600c5, #5300a0, #757575, #656565, #7f42a7, #6600c5, #5300a0, #757575, #656565)',
							}}>
							<div
								className={`absolute inset-[3px] bg-background rounded-custom flex justify-center items-center duration-500 hover:text-[#5300a0]`}>
								INTRUCING &#10847;
							</div>
						</div>

						<div className={`flex flex-col gap-4`}>
							<h1
								className={`text-4xl lg:text-5xl lg:text-[4rem] font-semibold tracking-widest leading-[1.1] text-shadow-[rgba(128,128,128,0.45)]`}>
								ENAIL FOR <br /> DEVELOPERS
							</h1>
							<p className={`text-sm lg:text-[1.2rem] tracking-wider max-w-[35rem] text-gray-500`}>
								the best way to reach humans insead of spam folders, deliver transactional and marketing emails at
								scale.
							</p>
						</div>

						<div className={`flex items-center gap-4 text-[1.2rem] font-semibold tracking-widest flex-wrap`}>
							<Link
								className={`uppercase border border-[#2a2a2a] py-2 px-4 lg:p-[0.7rem_1.2rem] text-lg lg:text-[1.2rem] rounded-custom tracking-widest hover:bg-[#1a1a1a] transform-content duration-200`}
								href={'#'}>
								Documentation &gt;
							</Link>
							<Link
								className={`text-background bg-gray-300 py-2 px-4 lg:p-[.6rem_2.5rem] text-lg lg:text-[1.2rem] rounded-custom hover:bg-gray-500 transform-content duration-200 transition-colors`}
								href={'#'}>
								Get Started &gt;
							</Link>
						</div>
					</div>
				</div>
				<div
					className={`w-full h-full absolute right-[-25%] top-[-20%] max-[1390px]:-mt-[30%] max-[1390px]:static 2xl:min-h-[1172px]`}>
					<Spline
						className={`max-[1160px]:scale-[2] scale-100 duration-700 transition-all`}
						scene='/scene.splinecode'
					/>
				</div>
			</div>
		</div>
	)
}
