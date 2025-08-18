import { Btn } from '@/shared/ui/custom/btn'
import Link from 'next/link'

const navItems = [
	{
		label: 'Company',
		href: '/',
	},
	{
		label: 'Features',
		href: '/',
	},
	{
		label: 'Resources',
		href: '/',
	},
	{
		label: 'Docs',
		href: '/',
	},
]

export function Header() {
	return (
		<header className={`z-50`}>
			<div className='relative flex justify-between items-center mx-auto p-[1.5rem_2rem] xl:p-[3rem_5rem] w-full overflow-hidden'>
				<Link
					className={`uppercase text-3xl lg:text-4xl xl:text-5xl font-light`}
					data-aos='fade-down'
					data-aos-duration='1500'
					data-aos-delay='100'
					href={'/'}>
					StarCode
				</Link>

				{/* need to increase duration by 500 for each item */}

				<nav className={`items-center gap-4 xl:gap-12  hidden md:flex`}>
					{navItems.map((item, index) => (
						<Link
							className={`uppercase will-change-auto block text-base tracking-widest hover:text-custom-gray`}
							key={item.label}
							data-aos='fade-down'
							data-aos-duration={1500 + index * 500}
							data-aos-delay={`100`}
							href={item.href}>
							{item.label}
						</Link>
					))}
				</nav>

				<button
					data-aos='fade-down'
					data-aos-duration={1500}
					data-aos-delay='100'
					className={`text-background will-change-auto bg-custom-gray py-2 lg:py-3 rounded-[50px] font-medium cursor-pointer px-6 lg:px-8 hover:bg-foreground uppercase`}>
					Sign in
				</button>
			</div>
		</header>
	)
}
