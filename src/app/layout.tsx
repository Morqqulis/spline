import { Bg } from '@/shared/ui/custom/bg'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header/header'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'StarCode | Frontend Developer',
	description: 'Красиво же !',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} relative tracking-wide flex flex-col antialiased overflow-x-clip`}>
				<Header />
				<main className={`flex-1`}>{children}</main>

				<Bg />
			</body>
		</html>
	)
}
