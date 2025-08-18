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
				<Link className={`uppercase text-3xl lg:text-4xl xl:text-5xl font-light`} href={'/'}>
					StarCode
				</Link>

				<nav className={`items-center gap-4 xl:gap-12  hidden md:flex`}>
					{navItems.map(item => (
						<Link
							className={`uppercase text-base tracking-widest transition-colors duration-200 hover:text-custom-gray`}
							key={item.label}
							href={item.href}>
							{item.label}
						</Link>
					))}
				</nav>

				<Btn text='Sign in' type='button' className={`uppercase`} />
			</div>
		</header>
	)
}
