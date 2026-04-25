import type { Metadata } from 'next';
import { Bebas_Neue, Inter } from 'next/font/google';
import './globals.css';

import Nav from './components/ui/Nav';
import NavMobile from './components/ui/NavMobile';
import Footer from './components/sections/Footer';
import ScrollFix from './components/system/ScrollFix';
import ScrollToTop from './components/system/ScrollToTop';

import { UIProvider } from './context/UIProvider';

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
	title: 'URBANEDGE',
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
			suppressHydrationWarning>
			<body className='min-h-full flex flex-col relative'>
				<UIProvider>
					<ScrollFix />
					<ScrollToTop />
					<Nav />
					<NavMobile />
					<main>{children}</main>
					<Footer />
				</UIProvider>
			</body>
		</html>
	);
}
