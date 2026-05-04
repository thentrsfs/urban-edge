'use client';

import ScrollLockProvider from '@/app/components/system/ScrollLockProvider';

import ScrollFix from '@/app/components/system/ScrollFix';
import ScrollToTop from '@/app/components/system/ScrollToTop';
import Nav from '@/app/components/ui/Nav';
import NavMobile from '@/app/components/ui/NavMobile';
import Footer from '@/app/components/sections/Footer';

export default function ClientShell({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ScrollLockProvider>
			<ScrollFix />
			<ScrollToTop />
			<Nav />
			<NavMobile />
			<main>{children}</main>
			<Footer />
		</ScrollLockProvider>
	);
}
