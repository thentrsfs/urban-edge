import type { Metadata } from 'next';
import { Bebas_Neue, Inter } from 'next/font/google';
import './globals.css';

import ClientShell from '@/app/components/system/ClientShell';

const playfair = Bebas_Neue({
	variable: '--font-heading',
	subsets: ['latin'],
	weight: '400',
});

const inter = Inter({
	variable: '--font-body',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'URBANEDGE - E-Commerce Platform',
	description: 'The urban edge of the future',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={`${playfair.variable} ${inter.variable} h-full antialiased font-body`}
			suppressHydrationWarning
			data-scroll-behavior='smooth'>
			<body className='min-h-full flex flex-col relative'>
				<video
					autoPlay
					muted
					loop
					playsInline
					className='fixed inset-0 w-full h-full blur-sm scale-110 object-cover -z-10'>
					<source
						src='/videos/video-6.mp4'
						type='video/mp4'
					/>
				</video>
				<div className='fixed inset-0 bg-bg/60 -z-10' />
				<ClientShell>{children}</ClientShell>
			</body>
		</html>
	);
}
