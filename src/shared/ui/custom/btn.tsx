import { cn } from '@/shared/utils/cn'

interface BtnProps {
	text: string
	className?: string
	type: 'button' | 'submit' | 'reset'
}

export function Btn({ text, className, type }: BtnProps & React.HTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			className={cn(
				`text-background bg-custom-gray py-2 lg:py-3 rounded-[50px] font-medium transition-colors duration-200 cursor-pointer px-6 lg:px-8 hover:bg-foreground ${className}`,
			)}
			type={type}>
			{text}
		</button>
	)
}
